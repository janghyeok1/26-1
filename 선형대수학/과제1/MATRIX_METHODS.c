#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include "MATRIX_METHODS.h"


/*
int main() {
	double** A;
	double** B;
	double** v; //vector
	double** w;	//vector
	int m = 5; 	//number of rows
	int n = 10;	//number of columns

	//Test transposeMatrix
	A = allocateMemory(m,n);
	for (int i = 0; i < m; i++)
		for (int j = 0; j < n; j++)
			A[i][j] = (double) i*j;
	printMatrix(A,m,n,"A");

	B = transposeMatrix(A,m,n);
	printMatrix(B,n,m,"B");

	//Test normalizeVector
	v = allocateMemory(m,1);
	for (int i = 0; i < m; i++)
		v[i][0] = i;
	w = normalizeVector(v,m);
	printMatrix(v,m,1,"v");
	printMatrix(w,m,1,"v_normalized");

	//release all the memory allocated
	releaseMemory(A, m);
	releaseMemory(B, n);
	releaseMemory(v, m);
	releaseMemory(w, m);

	return 0;
}*/

//functions for convenience
double** allocateMemory(int m, int n) {
	double** A;
	A = (double**) malloc(sizeof(double*) * m);
	for (int i = 0; i < m; i++) {
		A[i] = (double*) malloc(sizeof(double) * n);
	}
	return A;
}


void releaseMemory(double** A, int m) {
	for (int i = 0; i < m; i++)
		free(A[i]);
	free(A);
}

void printMatrix(double** A, int m, int n, char name[]) {
	printf("\n%s = \n", name);
	for (int i = 0; i < m; i++) {
		for (int j = 0; j < n; j++)
			printf("%0.2lf ", A[i][j]);
		printf("\n");
	}
}

//functions to implement in prj0 
double** transposeMatrix(double **A, int m, int n) {
	double** B = allocateMemory(n, m);

	for (int i = 0; i < m; i++)
		for (int j = 0; j < n; j++)
			B[j][i] = A[i][j];	
	
	return B;
}	

double** normalizeVector(double** v, int m) {
	double** w;
	double len = 0.0;

	for (int i = 0; i < m; i++)
		len += v[i][0]*v[i][0];	
	len = sqrt(len);

	w = allocateMemory(m,1);
	for (int i = 0; i < m; i++)
		w[i][0] = v[i][0]/len;
	
	return w;
}

