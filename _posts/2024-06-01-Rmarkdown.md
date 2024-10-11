---
title: Notes of Rmarkdown
date: 2024-06-01
permalink: /posts/2024-06-01-Rmarkdown
tags:
  - Rmarkdown
  - R
---

Self use


## Inline formatting

- _italic_ :  `_italic_` or `*italic*`
- **Bold** : `**Bold**`
- `inline code` :  `` `code` ``
- [rmarkdown-book](https://bookdown.org/yihui/rmarkdown/) : `[rmarkdown-book](related link)`
- syntax for images: `![alt text or image title](path/to/image){width='30px'}`. 
- Footnotes : `^[This is a footnote.]`.
- Block type:
    block type

## Block-level elements

# First-level header
## Second-level header
### Third-level header

```markdown
# First-level header
## Second-level header
### Third-level header
```

- one item
    - one more item
      - one more moreitem
      
1. second item
    - one more item
        - one more moreitem
        
> "Joey Doesn't Share Food !"    --- Joey Tribbiani

```markdown

- one item

    - one more item
    
      - one more moreitem
      
1.second item
  - one more item
    - one more moreitem
        
> "Joey Doesn't Share Food !"    --- Joey Tribbiani
```




## Math expressions

- Greek Letters: $$1.\alpha A;2.\nu N;3.\beta B;4.\xi\Xi;5.\gamma \Gamma;6.o O;7.\delta \Delta;8.\pi \Pi;9.\epsilon \varepsilon E;10.\rho\varrho P;\\
11.\zeta Z \sigma \,\!;12.\sigma \Sigma;13.\eta H;14.\tau T;15.\theta \vartheta \Theta;16.\upsilon \Upsilon;17.\iota I;18.\phi \varphi \Phi;19.\kappa K;20.\chi X;\\
21.\lambda \Lambda;22.\psi \Psi;23.\mu M;24.\omega \Omega$$

```markdown
$$1.\alpha A;2.\nu N;3.\beta B;4.\xi\Xi;5.\gamma \Gamma;6.o O;7.\delta \Delta;8.\pi \Pi;9.\epsilon \varepsilon E;10.\rho\varrho P;\\
11.\zeta Z \sigma \,\!;12.\sigma \Sigma;13.\eta H;14.\tau T;15.\theta \vartheta \Theta;16.\upsilon \Upsilon;17.\iota I;18.\phi \varphi \Phi;19.\kappa K;20.\chi X;\\
21.\lambda \Lambda;22.\psi \Psi;23.\mu M;24.\omega \Omega$$
```

- Mathematical Notation: $$1.\le;2.\ge;3.x_{n}^{n};4.\overline{x};5.\hat{x};6.\tilde{x};7.\frac{a}{b};8.\frac{\partial f}{\partial x};9.\displaystyle \frac{\partial f}{\partial x};10.\binom{n}{k};\\
11.\cdots ;12. \dots;13.\mathbf{x} = \langle x\rangle;14.\in ;15.\subset;16.\subseteq;17.\cup ;18.\cap ;19.\sim ;20.\mid;\\
21.\{\};22.\left(\int_{a}^{-\infty} f(x) \;23. dx\right);24.F|_{a}^{b};25.sum_{x = a}^{b};26.\prod_{x = a}^{b};27.\lim_{x \to \infty} f(x);28. \displaystyle \lim_{x \to \infty} f(x)$$


```markdown
$$1.\le;2.\ge;3.x_{n}^{n};4.\overline{x};5.\hat{x};6.\tilde{x};7.\frac{a}{b};8.\frac{\partial f}{\partial x};9.\displaystyle \frac{\partial f}{\partial x};10.\binom{n}{k};\\
11.\cdots ;12. \dots;13.\mathbf{x} = \langle x\rangle;14.\in ;15.\subset;16.\subseteq;17.\cup ;18.\cap ;19.\sim ;20.\mid;\\
21.\{\};22.\left(\int_{a}^{-\infty} f(x) \;23. dx\right);24.F|_{a}^{b};25.sum_{x = a}^{b};26.\prod_{x = a}^{b};27.\lim_{x \to \infty} f(x);28. \displaystyle \lim_{x \to \infty} f(x)$$

```
- matrix
$$\rightarrow
\begin{array}{lc}
\mbox{}&
\begin{array}{cccccc}X_1&X_2&X_3&Y_1&Y_2&Y_3\end{array}\\
\begin{array}{c}Y_1\\Y_2\\Y_3\end{array}&
\left[\begin{matrix}
\not\!1&\not\!0&\not\!0&\not\!1&\not\!0&\not\!1\\
\not\!0&1&0&\not\!1&1&\not\!0\\
\not\!0&0&1&\not\!0&1&\not\!1\\
\end{matrix}\right]
\end{array}
\rightarrow
\left[\begin{matrix}
1&0&1\\
0&1&1\\
\end{matrix}\right]
\rightarrow
Rank=2\tag {III}$$

```markdown
$$\rightarrow
\begin{array}{lc}
\mbox{}&
\begin{array}{cccccc}X_1&X_2&X_3&Y_1&Y_2&Y_3\end{array}\\
\begin{array}{c}Y_1\\Y_2\\Y_3\end{array}&
\left[\begin{matrix}
\not\!1&\not\!0&\not\!0&\not\!1&\not\!0&\not\!1\\
\not\!0&1&0&\not\!1&1&\not\!0\\
\not\!0&0&1&\not\!0&1&\not\!1\\
\end{matrix}\right]
\end{array}
\rightarrow
\left[\begin{matrix}
1&0&1\\
0&1&1\\
\end{matrix}\right]
\rightarrow
Rank=2\tag {III}$$
```
