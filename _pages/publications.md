---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

Zhang, Y., & Chen, J. (2024). Accommodating and Extending Various Models for Special Effects Within the Generalized Partially Confirmatory Factor Analysis Framework. Applied Psychological Measurement, 48(4-5), 208-229. https://doi.org/10.1177/01466216241261704


{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}

<sup>*</sup> Equal authorship