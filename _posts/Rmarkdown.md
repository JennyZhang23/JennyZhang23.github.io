---
title: Tutorial of Rmarkdown and SEM graph
output:
  md_document:
    variant: gfm+footnotes
    preserve_yaml: TRUE
knit: (function(inputFile, encoding) {
  rmarkdown::render(inputFile, encoding = encoding, output_dir = "../_posts") })
date: 2024-01-01
excerpt_separator: <!--more-->
toc: false
tags:
  - timer
  - visualization
---
## Inline formatting

- _italic_ :  `_text_` or `*text*`
- **Bold** : `**text**`
- H~3~PO~4~:  `H~3~PO~4~`
- Cu^2+^ : `Cu^2+^`
- `inline code` :  `` `code` ``
- [rmarkdown-book](https://bookdown.org/yihui/rmarkdown/) : `[text](link)`
- syntax for images: `![alt text or image title](path/to/image){width='30px'}`. 
- Footnotes : `^[This is a footnote.]`.
<span style="text-decoration:underline">(a) Quadratic effect</span> 

## Block-level elements

```markdown
# First-level header
## Second-level header
### Third-level header
```

```markdown

- one item

    - one more item
    
      - one more moreitem
      
1.second item
  - one more item
    - one more moreitem
        
> "Joey Doesn't Share Food !"    --- Joey Tribbiani
```

The output is:

- one item
    - one more item
      - one more moreitem
      
1. second item
    - one more item
        - one more moreitem
        
> "Joey Doesn't Share Food !"    --- Joey Tribbiani

    block type

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

\begin{align*}
a & = b \\
X &\sim {\sf Norm}(10, 3) \\
5 & \le 10
\end{align*}

$\rightarrow;\rightarrow$

## html format
<p style="text-indent:2em"> text indent 2 </p>

<font size="6">$\color{blue}{\text{Appendix 5.B}}$</font>

\noindent  indent 2 maybe 
&nbsp; means space

## figure





| Parameter          |Unstandardized| SE |  Standardized  | 
|:-------------------|-------------|:---:|:--------------:|
|                    | <span style="text-decoration:underline">Direct effects</span>|||
|Exercise → Fitness  |     .217** | .026 |  .026|
|Hardiness → Fitness |     .079   | .046 |  .082|
|Exercise → Stress   |    –.014   | .055 | –.014|
|Hardiness → Stress  |    –.393** | .089 | –.223|
|Fitness → Stress    |    –.198*  | .099 | –.109|
|Exer → Illness      |     .032   | .048 |  .034|
|Hardiness → Illness |    –.121   | .079 | –.074|
|Fitness → Illness   |    –.442** | .087 | –.260|
|Stress → Illness    |     .271** | .045 |  .291|
|                    |<span style="text-decoration:underline">Variances and covariances</span>|||
|Exercise            |4,410.394** |323.386|1.000|
|Hardiness           |1,440.129** |105.595|1.000|
|Exercise ![](bdunderarcarrow.png){width='30px'}Hardiness|–75.607 |130.726|–.030|
|$D_{Fi}$            |1,136.158** | 83.307| .841|
|$D_{St}$            |4,181.001** |306.566| .934|
|$D_{Il}$            |3,178.984** |233.094| .817|
Table:  **TABLE 6.2.** Maximum Likelihood Parameter Estimates for a Just-Identified Path Model of Illness Factors.

*Note*.Standardized estimates for disturbance variances are proportions of unexplained variance.\*p < .05; \*\*p < .01.

