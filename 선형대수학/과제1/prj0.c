#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include "MATRIX_METHODS.h"
#include "prj0.h"

#define MAX_MATRICES 20

typedef struct
{
	char name[32];
	double **data;
	int m;
	int n;
} Matrix;

Matrix matrices[MAX_MATRICES];
int matrixCount = 0;

double calculateLength(double **v, int n)
{
	double len = 0.0;
	for (int i = 0; i < n; i++)
		len += v[i][0] * v[i][0];
	return sqrt(len);
}
// 열벡터 길이

double **scaleMatrix(double **A, int m, int n, double c)
{
	double **B = allocateMemory(m, n);
	for (int i = 0; i < m; i++)
		for (int j = 0; j < n; j++)
			B[i][j] = c * A[i][j];
	return B;
}
// 행렬*상수

double **multiplyTwoMatrices(double **A, int m, int n, double **B, int l, int k)
{
	if (n != l)
		return NULL;

	double **C = allocateMemory(m, k);
	for (int i = 0; i < m; i++)
	{
		for (int j = 0; j < k; j++)
		{
			double sum = 0.0;
			for (int p = 0; p < n; p++)
				sum += A[i][p] * B[p][j];
			C[i][j] = sum;
		}
	}
	return C;
}
// 행렬 곱셈

double **addTwoMatrices(double **A, int m, int n, double **B, int l, int k)
{
	if (m != l || n != k)
		return NULL;

	double **C = allocateMemory(m, n);
	for (int i = 0; i < m; i++)
		for (int j = 0; j < n; j++)
			C[i][j] = A[i][j] + B[i][j];
	return C;
}
// 행렬 덧셈

void addMatrixMenu(void)
{
	if (matrixCount >= MAX_MATRICES)
	{
		printf("Storage full.\n");
		return;
	}
	char name[32];
	int m, n;
	printf("Matrix name: ");
	scanf("%31s", name);
	printf("m n: ");
	scanf("%d %d", &m, &n);

	double **data = allocateMemory(m, n);
	printf("Enter elements of %s (%d x %d), row by row:\n", name, m, n);
	for (int i = 0; i < m; i++)
	{
		for (int j = 0; j < n; j++)
		{
			printf("%s[%d][%d] = ", name, i, j);
			scanf("%lf", &data[i][j]);
		}
	}

	int idx = matrixCount;
	matrixCount++;

	strcpy(matrices[idx].name, name);
	matrices[idx].data = data;
	matrices[idx].m = m;
	matrices[idx].n = n;

	printf("Stored '%s' (%d x %d).\n", name, m, n);
}
// 행렬 추가

void listMatrices(void)
{
	if (matrixCount == 0)
	{
		printf("(no stored matrices)\n");
		return;
	}
	for (int i = 0; i < matrixCount; i++)
		printMatrix(matrices[i].data, matrices[i].m, matrices[i].n, matrices[i].name);
}
// 행렬 리스트

int promptMatrix(char label[])
{
	char name[32];
	printf("%s matrix name: ", label);
	scanf("%31s", name);

	for (int i = 0; i < matrixCount; i++)
		if (strcmp(matrices[i].name, name) == 0)
			return i;

	printf("Matrix '%s' not found.\n", name);
	return -1;
}
// 행렬 불러오기

int promptVector(char label[])
{
	int idx = promptMatrix(label);
	if (idx == -1)
		return -1;
	if (matrices[idx].n != 1)
	{
		printf("Matrix '%s' is not a column vector.\n", matrices[idx].name);
		return -1;
	}
	return idx;
}
// 열벡터 불러오기

int promptTwoMatrices(int *ia, int *ib)
{
	*ia = promptMatrix("A");
	if (*ia == -1)
		return 0;
	*ib = promptMatrix("B");
	if (*ib == -1)
		return 0;
	return 1;
}
// 행렬 2개 불러오기

void normalizeColumns(double **Htilde, int N, double **H)
{
	for (int j = 0; j < N; j++)
	{
		double **col = allocateMemory(N, 1);
		for (int i = 0; i < N; i++)
			col[i][0] = Htilde[i][j];
		double **colNorm = normalizeVector(col, N);
		for (int i = 0; i < N; i++)
			H[i][j] = colNorm[i][0];
		releaseMemory(col, N);
		releaseMemory(colNorm, N);
	}
}
// 정규화

int main()
{
	int choice = -1;
	while (choice != 8)
	{
		printf("\n0. Add matrix\n"
			   "1. transposeMatrix\n"
			   "2. normalizeVector\n"
			   "3. calculateLength\n"
			   "4. scaleMatrix\n"
			   "5. multiplyTwoMatrices\n"
			   "6. addTwoMatrices\n"
			   "7. List all stored matrices\n"
			   "8. B = H^T A H, C = H B H^T\n"
			   "9. Exit\n"
			   "Choose: ");
		scanf("%d", &choice);

		switch (choice)
		{
		case 0:
			addMatrixMenu();
			break;
		case 1:
		{
			int ia = promptMatrix("A");
			if (ia == -1)
				break;
			double **B = transposeMatrix(matrices[ia].data, matrices[ia].m, matrices[ia].n);
			printMatrix(matrices[ia].data, matrices[ia].m, matrices[ia].n, matrices[ia].name);
			printMatrix(B, matrices[ia].n, matrices[ia].m, "transpose");
			releaseMemory(B, matrices[ia].n);
			break;
		}
		case 2:
		{
			int iv = promptVector("v");
			if (iv == -1)
				break;
			double **w = normalizeVector(matrices[iv].data, matrices[iv].m);
			printMatrix(matrices[iv].data, matrices[iv].m, 1, matrices[iv].name);
			printMatrix(w, matrices[iv].m, 1, "normalize");
			releaseMemory(w, matrices[iv].m);
			break;
		}
		case 3:
		{
			int iv = promptVector("v");
			if (iv == -1)
				break;
			printf("length(%s) = %0.4lf\n", matrices[iv].name, calculateLength(matrices[iv].data, matrices[iv].m));
			break;
		}
		case 4:
		{
			int ia = promptMatrix("A");
			if (ia == -1)
				break;
			double c;
			printf("scalar c: ");
			scanf("%lf", &c);
			double **B = scaleMatrix(matrices[ia].data, matrices[ia].m, matrices[ia].n, c);
			printMatrix(matrices[ia].data, matrices[ia].m, matrices[ia].n, matrices[ia].name);
			printMatrix(B, matrices[ia].m, matrices[ia].n, "c*A");
			releaseMemory(B, matrices[ia].m);
			break;
		}
		case 5:
		{
			int ia, ib;
			if (!promptTwoMatrices(&ia, &ib))
				break;
			double **C = multiplyTwoMatrices(matrices[ia].data, matrices[ia].m, matrices[ia].n,
											 matrices[ib].data, matrices[ib].m, matrices[ib].n);
			if (C == NULL)
				printf("Multiplication not possible (size mismatch).\n");
			else
			{
				printMatrix(C, matrices[ia].m, matrices[ib].n, "A*B");
				releaseMemory(C, matrices[ia].m);
			}
			break;
		}
		case 6:
		{
			int ia, ib;
			if (!promptTwoMatrices(&ia, &ib))
				break;
			double **C = addTwoMatrices(matrices[ia].data, matrices[ia].m, matrices[ia].n,
										matrices[ib].data, matrices[ib].m, matrices[ib].n);
			if (C == NULL)
				printf("Addition not possible (size mismatch).\n");
			else
			{
				printMatrix(C, matrices[ia].m, matrices[ia].n, "A+B");
				releaseMemory(C, matrices[ia].m);
			}
			break;
		}
		case 7:
			listMatrices();
			break;
		case 8:
		{
			int ia = promptMatrix("A");
			if (ia == -1)
				break;
			int ih = promptMatrix("H_tilde");
			if (ih == -1)
				break;
			int N = matrices[ia].m;
			if (matrices[ia].m != matrices[ia].n || matrices[ih].m != matrices[ih].n || matrices[ih].m != N)
			{
				printf("Both matrices must be square and the same size.\n");
				break;
			}

			double **H = allocateMemory(N, N);
			normalizeColumns(matrices[ih].data, N, H);

			double **Ht = transposeMatrix(H, N, N);
			double **HtA = multiplyTwoMatrices(Ht, N, N, matrices[ia].data, N, N);
			double **B = multiplyTwoMatrices(HtA, N, N, H, N, N);
			double **BHt = multiplyTwoMatrices(B, N, N, Ht, N, N);
			double **C = multiplyTwoMatrices(H, N, N, BHt, N, N);

			printMatrix(matrices[ia].data, N, N, matrices[ia].name);
			printMatrix(matrices[ih].data, N, N, matrices[ih].name);
			printMatrix(H, N, N, "H");
			printMatrix(B, N, N, "B = H^T A H");
			printMatrix(C, N, N, "C = H B H^T");

			releaseMemory(H, N);
			releaseMemory(Ht, N);
			releaseMemory(HtA, N);
			releaseMemory(B, N);
			releaseMemory(BHt, N);
			releaseMemory(C, N);
			break;
		}
		case 9:
			break;
		default:
			printf("Invalid choice.\n");
		}
	}
	for (int i = 0; i < matrixCount; i++)
		releaseMemory(matrices[i].data, matrices[i].m);
	return 0;
}