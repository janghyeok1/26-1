# Linear Algebra — Lecture 4: Inverse Matrices

Hyang-Won Lee, Dept. of Computer Science and Engineering, Konkuk University

---

## Inverse Matrices

- A square matrix is said to be **invertible** (or **nonsingular**) if its inverse matrix exists. A square matrix that is not invertible is **singular**.
- **Examples of invertible matrices**:

  [1 2; 3 4],  [0 1; 1 0],  [1 2 3; 0 4 3; 0 0 1]

- **Example of singular matrices**:

  [1 2; 2 4],  [1 1; 2 2],  [1 2 3; 0 4 3; 0 0 0]

- Consider an n×n matrix A, and let A⁻¹ be its inverse if one exists.

## Properties of Inverse Matrix

- **P1.** A is invertible if and only if (iff) A has n pivots.
- **P2.** If A is invertible, then its inverse A⁻¹ is unique.
- **P3.** If A is invertible, then Ax = b has a unique solution, which is x = A⁻¹b.
- **P4.** If Ax = 0 for some x ≠ 0, then A is singular.
- **P5.** [a b; c d] is invertible if and only if ad − bc ≠ 0.

  [a b; c d]⁻¹ = (1/(ad−bc)) [d −b; −c a]

- **P6.** A diagonal matrix is invertible iff its diagonal entries are all nonzero.
- **P7.** If n×n matrices A and B are invertible, then AB is invertible and (AB)⁻¹ = B⁻¹A⁻¹.
- **P8.** A lower (or upper) triangular matrix is invertible iff its diagonal entries are nonzero.

## Gauss-Jordan Elimination

- A natural question at this point is "How do we check the invertibility and find an inverse matrix if one exists?" As P1 suggests, we could do Gaussian elimination to see if the matrix of interest has n pivots. An alternative way is to check the determinant of a matrix, which will be discussed later in this course. What we will be doing for now is to find an inverse matrix via so-called **Gauss-Jordan elimination**. If the matrix under consideration is singular, the elimination breaks down permanently, and so Gauss-Jordan also checks the invertibility.

### Gauss-Jordan Elimination (contd.)

- G-J is nothing but Gauss elimination, applied to some special equations involving the inverse of a matrix. Consider a square matrix A. If A is invertible, then we have AA⁻¹ = I. For the case of 3×3, let A⁻¹ = [x1 y1 z1; x2 y2 z2; x3 y3 z3]. Then we obtain three systems of linear equations: Ax = e1, Ay = e2, Az = e3, where ei is a unit column vector with i-th entry 1 and all others 0. Solving the first system yields the first column of A⁻¹, the second yields the second column, and the third yields the third column.

- **Example**: A = [2 −1 0; −1 2 −1; 0 −1 2]. We need to solve the systems Ax = e1, Ay = e2, Az = e3. However, Gaussian elimination does exactly the same operations for each of them, and hence we may put them all together and apply GE just once.

- Represent the three systems in augmented matrix form as:

  [2 −1 0 | 1 0 0; −1 2 −1 | 0 1 0; 0 −1 2 | 0 0 1]

  Apply GE:

  ⇒ [2 −1 0 | 1 0 0; 0 3/2 −1 | 1/2 1 0; 0 0 4/3 | 1/3 2/3 1]

  GE upward:

  ⇒ [2 −1 0 | 1 0 0; 0 3/2 0 | 3/4 3/2 3/4; 0 0 4/3 | 1/3 2/3 1]

  ⇒ [2 0 0 | 3/2 1 1/2; 0 3/2 0 | 3/4 3/2 3/4; 0 0 4/3 | 1/3 2/3 1]

  ⇒ [1 0 0 | 3/4 1/2 1/4; 0 1 0 | 1/2 1 1/2; 0 0 1 | 1/4 1/2 3/4]

  So A⁻¹ = [3/4 1/2 1/4; 1/2 1 1/2; 1/4 1/2 3/4].

## Left and Right Inverses

- Gauss-Jordan elimination in fact reveals that left and right inverses coincide (in finite dimension). To see this, let X = [x y z]. G-J solves AX = I, i.e., X is the right inverse of A. G-J eliminates A to I, so that the inverse of A appears on the right-hand side. In other words, it can be seen that G-J multiplies some matrix on the left of A in order to reach IX = B (let us not call this matrix A⁻¹ for now). What G-J multiplies is in fact the left inverse, and it is B. Moreover, its right inverse is also B. So what G-J finds is both the left and right inverse of A, and so we can let B = A⁻¹.

- **Alternative argument**: let B and C be the left and right inverse of A, respectively. Then:

  BA = I  &  AC = I  ⇒  BAC = B  ⇒  C = B

## Gauss-Jordan Elimination Applied to a Singular Matrix

- A = [1 0 −1; −1 1 0; 0 −1 1]. Apply G-J to A, and see what happens. (Exercise posed in the source slides — demonstrates that elimination breaks down permanently for a singular matrix, confirming it has no inverse.)

---

*End of Lecture 4*
