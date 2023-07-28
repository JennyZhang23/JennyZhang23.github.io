{% include base_path %}

original format of pages



Academic Project
======
* Master thesis 05/2022-010/2022 
  * Research Topic : Statistical Inference for Tensor Data
  * Software: Python
  * .......

* Undergraduate thesis 01/2020-06/2020 
  * Research Topic : Analysis of breast cancer prediction based on neural network
  * Software: Python
  * Studies the self-encoder neural network, the competitive neural network and iterative optimization algorithms;
  * Used Python to construct construct a predictive classification neural network for breast cancer.

* Leadership, Artificial intelligence training camp-machine learning 06/2019-07/2019 
  * Research Topic : Image Classification using deep learning
  * Software: Python, Keras
  * Used Python to construct convolutional neural network;
  * Training model with training set and design product.

* Leadership, System Design 07/2018-09/2018
  * Research Topic : Athletic Games Information Administration System
  * Software: JAVA, Microsoftware SQL Server 2014
  * Used My Eclipese to design the website and realized basic functions of the interface ;
  * Applied SQL to design database and matched the relavant functions of the website.

Teaching
======
* Teaching Assistant 02/2023-03/2023
Introduction to factor analysis and structural equation modeling

* Teaching Assistant  09/2022-11/2022 
Introduction to statistical methods

* Teaching Assistant  01/2022-03/2022 
Methods of research and enquiry


Work Experience
======
* 06/2022-08/2022: Research Assistant
  * The University of Hong Kong
  * Duties included: 
    * Enhance research methodology and psychometrics with learning-based latent variable modeling
    * Methodological developments to advance educational and psychological measurement with Bayesian learning
  * Supervisor: Dr. Jinsong Chen

* 06/2021-08/2021: Research Assistant
  * The University of Hong Kong
  * Duties included: Prepare teaching materials with R and Markdown
  * Supervisor: Dr. Jinsong Chen

* 02/2019-02/2019: Internship
  * Campus Representative, Biden Consulting Company, Shenyang
  * Duties included: 
    * Took the duties of brand and product promotion within campus
    * Planned and organized lectures and public welfare activities
    * Administrated operate alumni association.
  * Award: Campus excellent professional manager, 4 out of 100

* 02/2019-02/2019: Internship
  * Asset Management Department, Manulife Financial Centre, Hong Kong (Fortune 500) 
  * Duties included: 
    * Analyzed the Asian market and the development trend for asset planning products
    * Tracked the dynamic state of financial service industry and its market , collected and ollated information from multiple sources , wrote complete business proposal to support evidence for decision-making
    * Packed the funds, by different years, conducted real situational simulation, and made portfolio analysis as reference for corporate assets department.
  * Award: Best Team Award of The 2019 Manulife GP programme

Honors and Awards
======
* Honorable Mention, COMAP(MCM) 04/2019
* 3rd Prize, China Undergraduate Mathematical Contest in Modeling 11/2018
* 3rd Prize, Mathematical Modeling Contest for College Students 07/2018
* Successful Participant, COMAP(MCM), international-level 04/2018
* 2nd Prize, China Undergraduate Mathematical Contest in Modeling 11/2017
* 1st Prize, Mathematical Modeling Contest for College Students 07/2017
* 3rd Class Academic Scholarship, Northeastern University 11/2017, 11/2018, 11/2019
* Others：Volunteer Appreciation Award, PHILMIRAL WELFARE INC, international-level 07/2018


Certification
======
* Certificate in Teaching and Learning in Higher Education 
* Certificate of Advanced Yoga Coach
* Certificate of Violin National Ninth Grade
* Certificate of Piano National Fifth Grade

Skills
======
* Data Analysis
* Factor Analysis
* Programming: Python, MATLAB, R, SPSS, SQL, MY eclipse, C, C++
publication
======
{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}


Publications
======
  <ul>{% for post in site.publications %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Talks
======
  <ul>{% for post in site.talks %}
    {% include archive-single-talk-cv.html %}
  {% endfor %}</ul>
  
Teaching
======
  <ul>{% for post in site.teaching %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Service and leadership
======
* Currently signed in to 43 different slack teams



**Markdown generator**



How to edit your site's GitHub repository
------

Example: editing a markdown file for a talk
![Editing a markdown file for a talk](/images/editing-talk.png)

For more info
------
More info 
