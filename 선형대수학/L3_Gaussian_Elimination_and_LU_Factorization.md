# Linear Algebra — Lecture 3: Gaussian Elimination and LU Factorization

Hyang-Won Lee, Dept. of Computer Science and Engineering, Konkuk University

---

## Solving Linear Equations

- Consider the linear equations:

  x1 + x2 = 2      (1)
  2x1 − x2 = −4    (2)

- Multiplying equation (1) by 2 and subtracting it from (2) yields:

  x1 + x2 = 2      (3)
  −3x2 = −8        (4)

- Once we get a triangular form of equations, we are all done. It only remains to do some tedious substitutions.
- This method is called the **Gaussian Elimination Method**.

## Gaussian Elimination Method

- Recall that linear equations can be expressed as **Ax = b**.
- Gaussian elimination seeks to change the matrix A into an upper triangular form, so that solution(s) can be found via simple substitutions.
- Why triangular form? (posed as a discussion question in the source)

## Row Operations

- Three types of row operations used in Gaussian elimination:
  1. Subtracting a multiple of a row from another row (applied for elimination)
  2. Exchanging rows (applied when impossible to continue elimination)
  3. Scaling a row with a nonzero scalar (applied when simplifying coefficients)
- Row operations do not change solutions of equations.
- **Augmented matrix form** example:

  x1 + x2 + 2x3 + 3x4 = 2
  2x1 + 2x2 + 5x3 + 5x4 = 8
  x1 + 3x2 + 4x3 + 7x4 = 6
  x1 + 2x2 + 5x3 + 6x4 = 6

  ⇒ augmented matrix [1 1 2 3 | 2; 2 2 5 5 | 8; 1 3 4 7 | 6; 1 2 5 6 | 6]

  - Augmented matrix form makes it simple to present row operations.

### Example: Row Operations

Starting from:

[1 1 2 3 | 2; 2 2 5 5 | 8; 1 3 4 7 | 6; 1 2 5 6 | 6]

Step (1) — eliminate column 1 using row 1:

[1 1 2 3 | 2; 0 0 1 -1 | 4; 0 2 2 4 | 4; 0 1 3 3 | 4]

Step (2) — row exchange/reorder:

[1 1 2 3 | 2; 0 2 2 4 | 4; 0 0 1 -1 | 4; 0 1 3 3 | 4]

Step (1) — eliminate column 2 in row 4:

[1 1 2 3 | 2; 0 2 2 4 | 4; 0 0 1 -1 | 4; 0 0 2 1 | 2]

Step (1) — eliminate column 3 in row 4:

[1 1 2 3 | 2; 0 2 2 4 | 4; 0 0 1 -1 | 4; 0 0 0 3 | -6]

- The solution can be found quickly via back-substitution.

## Row Echelon Form

- The **row echelon form** of a matrix is the resulting matrix after Gaussian elimination is finished, satisfying:
  - Every zero row must be placed at the bottom of the matrix.
  - The first nonzero entry of the (k+1)th row must be to the right of the first nonzero entry of the kth row.
- **Examples**:

  [1 2; 0 4],   [1 1 1 1; 0 0 2 1 0; 0 0 0 1 1] (illustrative),   [1 1 1; 0 1 2; 0 0 0]

- **Pivots**: the first nonzero entry in each row in the row echelon form. (Find the pivots of the above matrices — exercise in source.)

## Pivots and Multipliers

- **Note**:
  - From the elimination perspective, the pivot is the first nonzero entry in the row that carries out the elimination.
  - For n equations with n unknowns, if there are n pivots, then the solution exists and is unique.
- Find the pivots of the following matrices (exercise in source):

  [2 4 -2; 4 9 -3; -2 -3 7],   [1 1 2 3; 2 2 5 5; 1 3 4 7; 1 2 5 6]

- **Multiplier**: **Definition** — the entry to eliminate divided by the pivot.

## Gaussian Elimination Method Example

- Consider the linear equations:

  2x1 + 4x2 − 2x3 = 2    (5)
  4x1 + 9x2 − 3x3 = 8    (6)
  −2x1 − 3x2 + 7x3 = 10  (7)

### First step

- Pivot: 2, multipliers: l21 = 2, l31 = −1 (why?)
- Replace (6) with (6) − l21×(5)
- Replace (7) with (7) − l31×(5)
- Then we get:

  2x1 + 4x2 − 2x3 = 2   (8)
  x2 + x3 = 4           (9)
  x2 + 5x3 = 12          (10)

### Second step

- Pivot: 1, multiplier: l32 = 1 (why?)
- Replace (10) with (10) − l32×(9)
- Then we get:

  2x1 + 4x2 − 2x3 = 2   (11)
  x2 + x3 = 4           (12)
  4x3 = 8                (13)

- Applying back substitution yields x3 = 2, x2 = 2, x1 = −1.
- The last pivot is 4. So we have three pivots for three equations, in which case the solution exists and is unique.

## Temporary Breakdown of Elimination

- Example:

  [1 1 1 | 7; 1 1 -1 | 5; 1 -1 2 | 3]  →(1st step)→  [1 1 1 | 7; 0 0 -2 | 2; 0 -2 -1 | -2]

  In this case, it seems that the elimination procedure cannot continue. However, we can fix this by exchanging the second and third rows:

  →(row exchange)→  [1 1 1 | 7; 0 -2 1 | -2; 0 0 -2 | 2]

  Pivots are 1, −2, −2. We are all done!

- This is why it is called **temporary breakdown**.
- During the elimination process, if there is a zero in the pivot position, we should consider exchanging rows.

## Permanent Breakdown of Elimination

- Apply Gaussian elimination to:

  [1 1 1 | 7; 1 1 -1 | 5; -1 -1 1 | 3]  →(1st step)→  [1 1 1 | 7; 0 0 -2 | -2; 0 0 2 | 10]

  We have zero in the pivot position (2,2), and so we may consider exchanging the second and third rows. However, entry (3,2) is also zero and thus row exchange does not work. In this case, the elimination process cannot continue, thereby called **permanent breakdown**.

- When permanent breakdown occurs, there exist no or infinitely many solutions. (This will be discussed further later in the course.)
- Gaussian elimination process can also be expressed as matrix multiplication, which will be discussed after the discussion of inverse matrices.

## Elimination as Matrix Multiplication

- The elimination process (row scaling, row exchange, subtracting a multiple of a row from another) can be expressed as matrix multiplication. Example:

| | Equations | Matrix form |
|---|---|---|
| Original | 2x1 + x2 = 3; 6x1 + 8x2 = 5 | [2 1; 6 8][x1;x2] = [3;5] |
| Final | 2x1 + x2 = 3; 5x2 = −4 | [1 0; −3 1][2 1; 6 8][x1;x2] = [1 0; −3 1][3;5] |

- Elimination is equivalent to multiplying some matrix on the equations.

## Elimination Matrix and LU Factorization

- Consider an elimination step where multiplier lij is used to eliminate entry (i,j). Then, the corresponding **elimination matrix** is the identity matrix with entry (i,j) being −lij.
- In the previous example, the multiplier is 3 and used to eliminate entry (2,1). Therefore, the elimination matrix is:

  E21 = [1 0; −3 1]

- Consequently, E21·A = [2 1; 0 5]. We know that E21 is invertible, and thus:

  A = E21⁻¹ [2 1; 0 5] = LU

  where L = E21⁻¹ and U = [2 1; 0 5].

- We have found an expression for A as the product of lower and upper triangular matrices. This is called **LU factorization**.

## LU Factorization Example

- Consider A = [2 4 −2; 4 9 −3; −2 −3 7].
- In the first step of elimination, multipliers l21 = 2 and l31 = −1. Elimination matrices:

  E21 = [1 0 0; −2 1 0; 0 0 1],  E31 = [1 0 0; 0 1 0; 1 0 1]

  Combined elimination matrix for the first step: E31·E21 = [1 0 0; −2 1 0; 1 0 1]

- After the first step, E31·E21·A = [2 4 −2; 0 1 1; 0 1 5]. The multiplier l32 in the second step is 1, so the elimination matrix is:

  E32 = [1 0 0; 0 1 0; 0 −1 1]

  E32·E31·E21·A = [2 4 −2; 0 1 1; 0 0 4] ≜ U

- To summarize:

  A = (E32·E31·E21)⁻¹·U = E21⁻¹·E31⁻¹·E32⁻¹·U
    = [1 0 0; 2 1 0; 0 0 1][1 0 0; 0 1 0; −1 0 1][1 0 0; 0 1 0; 0 1 1]·U
    = [1 0 0; 2 1 0; −1 1 1]·U
    = [1 0 0; 2 1 0; −1 1 1][2 4 −2; 0 1 1; 0 0 4]

- **Note**: When row exchange is needed for elimination to continue, a permutation matrix must be multiplied.
- **Example**: [0 1; 2 4],  [0 1 1; 1 2 1; 2 7 9]

## Why LU Factorization?

- Consider the system Ax = b. Suppose we have found the LU factorization of A. Then Ax = b can be decomposed into two subproblems:

  Ax = b ⇒ Ux = y,  Ly = b

  Each of the subproblems is quite easy to solve, and this method is used in computer systems to solve linear equations.

- LU factorization is also useful for computing the determinant and inverse of a matrix (Chapter 5).
- Does a singular matrix have LU factorization? (posed as a discussion question in the source)

## LDU Factorization

- In LU factorization, U can be further decomposed into DU' where D is a diagonal matrix with diagonal entries being the pivots (assume A has n pivots, i.e., A is invertible). Thus, for A = LU', we can write:

  A = LDU

  where D = diag(d1, d2, ..., dn) is the pivot matrix and U = D⁻¹U'.

- In the previous example:

  A = [1 0 0; 2 1 0; −1 1 1][2 4 −2; 0 1 1; 0 0 4] = [1 0 0; 2 1 0; −1 1 1][2 0 0; 0 1 0; 0 0 4][1 2 −1; 0 1 1; 0 0 1]

## Symmetric Matrices

- A matrix A is said to be **symmetric** if A^T = A.
- **Example**: [1 3; 3 2],  [1 −2 −1; −2 2 3; −1 3 1]
- **Properties of symmetric matrices**:
  - P1. If A is symmetric and invertible, then A⁻¹ is symmetric.
  - P2. R^T·R and R·R^T are symmetric for any matrix R.
  - P3. For a symmetric matrix A having LDU factorization, U = L^T. That is, A = LDL^T.
    - **Example**: A = [2 6; 6 8]

---

*End of Lecture 3*
