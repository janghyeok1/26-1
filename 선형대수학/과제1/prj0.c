#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include "MATRIX_METHODS.h"
#include "prj0.h"

double calculateLength(double** v, int n) {
	double len = 0.0;
	for (int i = 0; i < n; i++)
		len += v[i][0] * v[i][0];
	return sqrt(len);
}
//열벡터 길이 계산

double** scaleMatrix(double** A, int m, int n, double c) {
	double** B = allocateMemory(m, n);
	for (int i = 0; i < m; i++)
		for (int j = 0; j < n; j++)
			B[i][j] = c * A[i][j];
	return B;
}
//m*n행렬 상수배

double** multiplyTwoMatrices(double** A, int m, int n, double** B, int l, int k) {
	if (n != l)
		return NULL;

	double** C = allocateMemory(m, k);
	for (int i = 0; i < m; i++) {
		for (int j = 0; j < k; j++) {
			double sum = 0.0;
			for (int p = 0; p < n; p++)
				sum += A[i][p] * B[p][j];
			C[i][j] = sum;
		}
	}
	return C;
}
//m*n l*k 행렬곱

double** addTwoMatrices(double** A, int m, int n, double** B, int l, int k) {
	if (m != l || n != k)
		return NULL;

	double** C = allocateMemory(m, n);
	for (int i = 0; i < m; i++)
		for (int j = 0; j < n; j++)
			C[i][j] = A[i][j] + B[i][j];
	return C;
}
//행렬 덧셈

double** inputMatrix(int m, int n, char name[]) {
	double** A = allocateMemory(m, n);
	printf("Enter elements of %s (%d x %d), row by row:\n", name, m, n);
	for (int i = 0; i < m; i++) {
		for (int j = 0; j < n; j++) {
			printf("%s[%d][%d] = ", name, i, j);
			scanf("%lf", &A[i][j]);
		}
	}
	return A;
}
//행렬 입력

void normalizeColumns(double** Htilde, int N, double** H) {
	for (int j = 0; j < N; j++) {
		double** col = allocateMemory(N, 1);
		for (int i = 0; i < N; i++)
			col[i][0] = Htilde[i][j];
		double** colNorm = normalizeVector(col, N);
		for (int i = 0; i < N; i++)
			H[i][j] = colNorm[i][0];
		releaseMemory(col, N);
		releaseMemory(colNorm, N);
	}
}
//정규화

int main() {
	int choice = 8;
	while (choice != 0) {
		printf("\n1. transposeMatrix\n");
		printf("2. normalizeVector\n");
		printf("3. calculateLength\n");
		printf("4. scaleMatrix\n");
		printf("5. multiplyTwoMatrices\n");
		printf("6. addTwoMatrices\n");
		printf("7. B = H^T*A*H, C = H*B*H^T\n");
		printf("0. Exit\n");
		scanf("%d", &choice);
		
		switch (choice) {
		case 1: {
			int m, n;
			printf("m n: ");
			scanf("%d %d", &m, &n);
			double** A = inputMatrix(m, n, "A");
			double** B = transposeMatrix(A, m, n);
			printMatrix(A, m, n, "A");
			printMatrix(B, n, m, "transpose(A)");
			releaseMemory(A, m);
			releaseMemory(B, n);
			break;
		}
		case 2: {
			int n;
			printf("n: ");
			scanf("%d", &n);
			double** v = inputMatrix(n, 1, "v");
			double** w = normalizeVector(v, n);
			printMatrix(v, n, 1, "v");
			printMatrix(w, n, 1, "normalize(v)");
			releaseMemory(v, n);
			releaseMemory(w, n);
			break;
		}
		case 3: {
			int n;
			printf("n: ");
			scanf("%d", &n);
			double** v = inputMatrix(n, 1, "v");
			printf("length(v) = %0.4lf\n", calculateLength(v, n));
			releaseMemory(v, n);
			break;
		}
		case 4: {
			int m, n;
			double c;
			printf("m n: ");
			scanf("%d %d", &m, &n);
			double** A = inputMatrix(m, n, "A");
			printf("scalar c: ");
			scanf("%lf", &c);
			double** B = scaleMatrix(A, m, n, c);
			printMatrix(A, m, n, "A");
			printMatrix(B, m, n, "c*A");
			releaseMemory(A, m);
			releaseMemory(B, m);
			break;
		}
		case 5: {
			int m, n, l, k;
			printf("m n (size of A): ");
			scanf("%d %d", &m, &n);
			double** A = inputMatrix(m, n, "A");
			printf("l k (size of B): ");
			scanf("%d %d", &l, &k);
			double** B = inputMatrix(l, k, "B");
			double** C = multiplyTwoMatrices(A, m, n, B, l, k);
			if (C == NULL)
				printf("Multiplication not possible (n != l).\n");
			else
				printMatrix(C, m, k, "A*B");
			releaseMemory(A, m);
			releaseMemory(B, l);
			if (C != NULL) releaseMemory(C, m);
			break;
		}
		case 6: {
			int m, n, l, k;
			printf("m n (size of A): ");
			scanf("%d %d", &m, &n);
			double** A = inputMatrix(m, n, "A");
			printf("l k (size of B): ");
			scanf("%d %d", &l, &k);
			double** B = inputMatrix(l, k, "B");
			double** C = addTwoMatrices(A, m, n, B, l, k);
			if (C == NULL)
				printf("Addition not possible (size mismatch).\n");
			else
				printMatrix(C, m, n, "A+B");
			releaseMemory(A, m);
			releaseMemory(B, l);
			if (C != NULL) releaseMemory(C, m);
			break;
		}
		case 7: {
			int N;
			printf("N (size of square matrices): ");
			scanf("%d", &N);
			double** A = inputMatrix(N, N, "A");
			double** Htilde = inputMatrix(N, N, "H_tilde");

			double** H = allocateMemory(N, N);
			normalizeColumns(Htilde, N, H);

			double** Ht = transposeMatrix(H, N, N);
			double** HtA = multiplyTwoMatrices(Ht, N, N, A, N, N);
			double** Bmat = multiplyTwoMatrices(HtA, N, N, H, N, N);
			double** BHt = multiplyTwoMatrices(Bmat, N, N, Ht, N, N);
			double** Cmat = multiplyTwoMatrices(H, N, N, BHt, N, N);

			printMatrix(A, N, N, "A");
			printMatrix(Htilde, N, N, "H_tilde");
			printMatrix(H, N, N, "H");
			printMatrix(Bmat, N, N, "B = H^T A H");
			printMatrix(Cmat, N, N, "C = H B H^T");

			releaseMemory(A, N);
			releaseMemory(Htilde, N);
			releaseMemory(H, N);
			releaseMemory(Ht, N);
			releaseMemory(HtA, N);
			releaseMemory(Bmat, N);
			releaseMemory(BHt, N);
			releaseMemory(Cmat, N);
			break;
		}
		case 0:
			break;
		default:
			printf("\n");
		}
	}
	return 0;
}
