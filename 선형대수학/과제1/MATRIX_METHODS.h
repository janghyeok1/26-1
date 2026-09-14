//functions for convenience
double** allocateMemory(int m, int n); 
void releaseMemory(double** A, int m);
void printMatrix(double** A, int m, int n, char name[]);

//functions to implement in prj0 
//transposeMatrix, normalizeVector, calculateLength
//scaleMatrix, multiplyTwoMatrices, addTwoMatrices
double** transposeMatrix(double** A, int m, int n);
double** normalizeVector(double** v, int n);
double calculateLength(double** v, int n);
double** scaleMatrix(double** A, int m, int n, double c);
double** multiplyTwoMatrices(double** A, int m, int n, double** B, int l, int k);
double** addTwoMatrices(double** A, int m, int n, double** B, int l, int k);
