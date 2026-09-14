# Linear Algebra — Lecture 2: Matrix Multiplication

Hyang-Won Lee, Dept. of Computer Science and Engineering, Konkuk University

---

## Multiplication with Vectors

- **General rule** for m×n matrix A and n-dimensional column vector x:

  Ax = [a11 a12 ... a1n; a21 a22 ... a2n; ... ; am1 am2 ... amn] [x1; x2; ...; xn]
     = [Σ(j=1..n) a1j·xj; Σ(j=1..n) a2j·xj; ...; Σ(j=1..n) amj·xj]

- **Note**: A can be multiplied on the right by vector x only when the number of columns in A equals the dimension of x.

### Examples

- [1 2; 2 4] [2; 3] = ?
- [1 2 3 4; 1 -1 -2 2] [1; 2; 3; 2] = ?
- [1 2 3 4] [1; 2; 3; 2] = ?

(Worked examples left for the reader to compute, as in the source slides.)

## Multiplication as Linear Combination

- Multiplication can be expressed as a linear combination.
- For m×n matrix A and n-d column vector x, writing A in terms of its columns a1, a2, ..., an:

  Ax = [a1 a2 ... an] [x1; x2; ...; xn] = x1·a1 + x2·a2 + ... + xn·an

- **Note**: This is a very important view of multiplication which will be useful throughout this course.

## Matrix Multiplication

- **Generalization** for m×n matrix A and n×p matrix B:

  AB = [a11 ... a1n; ... ; am1 ... amn] [b11 ... b1p; ... ; bn1 ... bnp]
     = [Σ(k=1..n) a1k·bk1  ...  Σ(k=1..n) a1k·bkp
        ...                ...
        Σ(k=1..n) amk·bk1  ...  Σ(k=1..n) amk·bkp]  ∈ ℝ^(m×p)

- Consider m×n matrix A and l×p matrix B. A can be multiplied on the right by B only if n = l, and [AB]ij = Σ(k=1..n) aik·bkj.

- **Alternative representation** (block/column-row view):

  AB = [a1; a2; ...; am] [b1 b2 ... bp] = [a1b1 a1b2 ... a1bp; a2b1 a2b2 ... a2bp; ...; amb1 amb2 ... ambp] ∈ ℝ^(m×p)

  = A[b1 b2 ... bp] = [Ab1 Ab2 ... Abp]

- (m×n)(n×p) = (m×p)
- AA = A², AAA = A³, ...

## Properties of Addition and Multiplication

- Commutativity, associativity, distributivity:

| Addition | Multiplication |
|---|---|
| A + B = B + A | AB ≠ BA |
| (A+B)+C = A+(B+C) | (AB)C = A(BC) |
| c(A+B) = cA + cB | C(A+B) = CA + CB |
| | (A+B)C = AC + BC |

## Transposes

- The **transpose** of A, denoted A^T, is a matrix such that [A^T]ij = [A]ji. The transpose exchanges row and column positions of each entry. Hence, (m×n)^T = n×m.
- Examples: (left as exercise in source slides)

### Properties

- (A + B)^T = A^T + B^T
- (AB)^T = B^T A^T

### Inner and Outer Products

- **Inner product** of vectors v ∈ ℝⁿ and w ∈ ℝⁿ:

  v · w = v^T w ∈ ℝ

- **Outer product** of vectors v ∈ ℝᵐ and w ∈ ℝⁿ:

  v ⊗ w = vw^T ∈ ℝ^(m×n),  [vw^T]ij = vi·wj

  - Generalized to the Kronecker product.

## Some Special Matrices

### Identity Matrix I

- **Definition**: n×n square matrix I that has diagonal entries all 1 and off-diagonal entries all 0, i.e.,

  I = [1 0 ... 0; 0 1 ... 0; ... ; 0 0 ... 1]

- For m×n matrix A, AI = A.
- For n×m matrix A, IA = A.

### Permutation Matrix P

- **Definition**: n×n binary matrix that has exactly one entry 1 in each row and each column.
- For the permutation matrix P = [0 1 0; 1 0 0; 0 0 1], PA moves the first row (of A) to the second, and second to first.
- AP moves the second column to the first, and first to second.

### Diagonal Matrix D

- **Definition**: n×n square matrix that has only diagonal entries nonzero and all others zero.
- For the diagonal matrix D = [2 0 0; 0 3 0; 0 0 4], DA doubles the first row of A, triples the second row, and quadruples the third row.
- What happens for AD? (left as a question in the source — AD scales the columns of A instead of the rows: column 1 ×2, column 2 ×3, column 3 ×4.)

### Inverse Matrix A⁻¹

- **Definition**: For an n×n matrix A, the inverse matrix is an n×n square matrix A⁻¹ satisfying AA⁻¹ = I and A⁻¹A = I.
- (A⁻¹)^T = (A^T)⁻¹ (why?)

### Rotation Matrix and Reflection Matrix

  Ro = [cos θ  −sin θ; sin θ  cos θ]     Re = [cos 2θ  sin 2θ; sin 2θ  −cos 2θ]

- Does the length change? (question posed in source slides)

## Linear Equations as Matrix-Vector Multiplication

- The linear equations

  x1 + 3x2 + 4x3 = 2
  x1 + 7x2 − x3 = −1
  x1 + 4x2 + x3 = 5

  can be rewritten as **Ax = b**, where

  A = [1 3 4; 1 7 -1; 1 4 1],  x = [x1; x2; x3],  b = [2; -1; 5]

- This representation greatly simplifies our discussion of the properties of linear equations.

## Linear Equations as Linear Combination of Vectors

- Consider the linear equations

  x1 + x2 = 2
  x1 − x2 = −4

  can be rewritten as

  x1[1; 1] + x2[1; -1] = [2; -4]

- Solving the above linear equations is equivalent to finding a linear combination of two vectors [1;1] and [1;-1] that produces the right-hand side (RHS) vector [2;-4].

---

*End of Lecture 2*
