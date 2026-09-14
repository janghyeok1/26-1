#ifndef PRJ0_H
#define PRJ0_H

#include "MATRIX_METHODS.h"

double calculateLength(double** v, int n);
double** scaleMatrix(double** A, int m, int n, double c);
double** multiplyTwoMatrices(double** A, int m, int n, double** B, int l, int k);
double** addTwoMatrices(double** A, int m, int n, double** B, int l, int k);

#endif
