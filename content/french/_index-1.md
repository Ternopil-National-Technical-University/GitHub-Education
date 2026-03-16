---
########################### hero slider ############################
hero_slider:
  enable : true
  slider_item:
    # slider item
    - subtitle : "GPM Parks"
      title : "Hubs Industriels <br>Durables"
      content : "Développement d'écosystèmes industriels de classe mondiale - GPM 1, GPM 2 et GPM 4 - dédiés aux 
      énergies renouvelables et à la croissance stratégique."
      bg_image_webp : "images/slider/image44.jpeg"
      bg_image : "images/slider/image44.jpeg"
      animation : "fadeInUp" # animation select from : https://daneden.github.io/animate.css/
      button:
        enable : true
        label : "plus de détails"
        link : "fr/project/"
        animation : "zoomIn" # animation select from : https://daneden.github.io/animate.css/

    # slider item
    - subtitle : "GPM Parks"
      title : "Production d'énergie <br>solaire à grande échelle"
      content : "Les centrales solaires à grande échelle sont conçues pour fonctionner pendant 25 à 30 ans avec une dégradation minimale."
      bg_image_webp : "images/slider/09.png"
      bg_image : "images/slider/09.png"
      animation : "fadeInLeft" # animation select from : https://daneden.github.io/animate.css/
      button:
        enable : true
        label : "plus de détails"
        link : "fr/project/"
        animation : "zoomIn" # animation select from : https://daneden.github.io/animate.css/

    # slider item
    - subtitle : "GPM Parks"
      title : "Puissance maximale <br>avec chaque panneau"
      content : "Nous privilégions les projets techniquement solides, respectueux de l'environnement et économiquement viables à long terme."
      bg_image_webp : "images/slider/image5.jpg"
      bg_image : "images/slider/image5.jpg"
      animation : "fadeInRight" # animation select from : https://daneden.github.io/animate.css/
      button:
        enable : true
        label : "plus de détails"
        link : "fr/project/"
        animation : "zoomIn" # animation select from : https://daneden.github.io/animate.css/

################################## banner feature ############################
banner_feature:
  enable : true
  # Max use 4 item
  feature_item:
    # banner feature item loop
    - name : "Centrales Solaires à Grande Échelle"
      icon : "fas fa-solar-panel" # font-awesome 5 : https://fontawesome.com/icons/
      content : "Centrales photovoltaïques de grande envergure avec une dégradation minimale."

    # banner feature item loop
    - name : "Technologie de Suivi Solaire"
      icon : "fas fa-compass" # font-awesome 5 : https://fontawesome.com/icons/
      content : "Suiveurs solaires avancés à axe horizontal pour une productivité journalière optimale."

    # banner feature item loop
    - name : "Réduction de l'Impact Environnemental"
      icon : "fas fa-leaf" # font-awesome 5 : https://fontawesome.com/icons/
      content : "La production d'électricité zéro émission réduit la dépendance aux énergies fossiles."


################################## about ####################################
about:
  enable : true
  subtitle : "À propos de nous"
  title : "Ce que fait GPM Parks"

  content : "GPM Parks développe, construit, détient et exploite des centrales solaires photovoltaïques à grande échelle. Ces centrales 
  convertissent la lumière du soleil en électricité qui est livrée soit au réseau national, soit directement aux consommateurs industriels.
  <br><br>
  Les centrales solaires de grande envergure se composent de milliers de panneaux photovoltaïques installés sur de grandes étendues de 
  terrain, soutenus par une infrastructure électrique telle que des onduleurs, des transformateurs et des sous-stations. Ces systèmes 
  sont conçus pour fonctionner pendant 25 à 30 ans avec une dégradation minimale.
  <br><br>
  GPM Parks se concentre sur des projets techniquement robustes, écologiquement responsables et économiquement viables à long terme."

  bg_image : "images/backgrounds/about-us-bg.png"
  bg_image_webp : "images/backgrounds/about-us-bg.webp"
  image_webp : "images/about/image3.jpeg"
  image : "images/about/image3.jpeg"
  button:
    enable : true;
    label : "plus de services"
    link : "#contacts"

################################## funfacts ###############################
funfacts :
  enable : true
  funfacts_item :
    # fanfacts item loop
    - name : "Projets en cours"
      count : "3"
      icon : "fas fa-tasks" # font-awesome 5 : https://fontawesome.com/icons/

    # fanfacts item loop
    - name : "Années d'expérience"
      count : "10"
      icon : "far fa-calendar-alt" # font-awesome 5 : https://fontawesome.com/icons/

    # fanfacts item loop
    - name : "Production annuelle (GWh)"
      count : "67"
      icon : "fas fa-bolt" # font-awesome 5 : https://fontawesome.com/icons/

    # fanfacts item loop
    - name : "Surface des projets (ha)"
      count : "72"
      icon : "fas fa-map" # font-awesome 5 : https://fontawesome.com/icons/


################################# feature ############################################
feature:
  enable : true
  subtitle : "Fabrication et Technologie"
  title : "Technologie des Parcs Solaires"
  image_webp : "images/about/GPM-1-2-map.jpeg"
  image : "images/about/GPM-1-2-map.jpeg"
  content : ""
  feature_item:
    # feature item loop
    - name : "Équipements de pointe pour une production d'énergie propre"
      icon : "fas fa-solar-panel" # font-awesome 5 : https://fontawesome.com/icons/
      content : "Le parc solaire GPM 1 utilise des équipements de pointe conçus pour garantir une production d'énergie propre, fiable et 
      performante.
      <br><br> 
      - <b>Suivi Solaire :</b> Les panneaux sont montés sur des suiveurs solaires à axe horizontal alignés dans une direction Nord-Sud. 
      Cette technologie permet aux panneaux de suivre la lumière du soleil du lever au coucher, maximisant la production d'énergie tout au long de la journée. <br>
      - <b>Conversion d'Énergie :</b> Les panneaux photovoltaïques captent l'énergie solaire et la convertissent en électricité. Cette production 
      est optimisée par des systèmes d'onduleurs qui assurent une transformation stable et efficace du courant.<br>
      - <b>Intégration au Réseau :</b> L'énergie produite est transmise via des postes de transformation et des sous-stations de livraison, 
      permettant une intégration sûre et fluide au réseau électrique national.
      <br><br> Ce système offre un fonctionnement fluide et sécurisé, conforme aux meilleures pratiques de l'industrie, tout en fournissant de 
      l'électricité verte au réseau."


################################# service ############################################
service:
  enable : false
  subtitle : "Project Solutions"
  title : "Service We Provide"
  service_item:
    # service item loop
    - name : "GreenPower Morocco 1"
      link : "service/gpm-1/"
      logo : "images/service/logo-gpm-1.png"
      image : "images/service/image3.jpeg"
      content : "GPM Holding, through its subsidiary GreenPower Morocco 1 S.A., has successfully developed a 30 MWac 
      photovoltaic park. The facility is located at Douar Daidaat, within the Hjar Ennhal commune of the Tangier-Asilah 
      prefecture.
      <br><br>      
      Developed within the framework of Law 13-09 regarding renewable energies, the project represents a significant 
      contribution to Morocco's green energy infrastructure."

    # service item loop
    - name : "GreenPower Morocco 2"
      link : "service/gpm-2/"
      logo : "images/service/logo-gpm-2.png"
      image : "images/service/image6.jpeg"
      content : "GPM Holding is currently developing two additional photovoltaic solar parks: GreenPower Morocco 2 and 
      GreenPower Morocco 4.
      <br><br> 
      Like their predecessor, these projects fall under the framework of Law 13-09, which governs electricity 
      production from renewable sources and promotes the development of green energy projects in Morocco.
      <br><br> 
      GPM Holding is currently developing two additional photovoltaic solar parks: GreenPower Morocco 2 and GreenPower 
      Morocco"

    # service item loop
    - name : "GreenPower Morocco 4"
      link : "service/gpm-4/"
      logo : "images/service/logo-gpm-4.png"
      image : "images/service/image7.jpg"
      content : "GPM Holding is currently developing two additional photovoltaic solar parks: GreenPower Morocco 2 and 
      GreenPower Morocco 4.
      <br><br> 
      Like their predecessor, these projects fall under the framework of Law 13-09, which governs electricity 
      production from renewable sources and promotes the development of green energy projects in Morocco.
      <br><br> 
      GPM Holding is currently developing two additional photovoltaic solar parks: GreenPower Morocco 2 and GreenPower 
      Morocco"


################################# team ##############################################
team:
  enable : false
  section: "team"
  show_item : 3
  # team member comes from "content/*/team" folder

################################# project ############################################
project:
  enable : true
  section: "project"
  show_item : 3
  button:
    enable : true
    label : "plus de projets"
    link : "project/"
  # project item comes from "content/*/project" folder

################################# blog ################################################
cta:
  enable : true
  title : "Alimentez votre avenir avec des solutions d'énergie propre"
  bg_image_webp : "images/backgrounds/AM_Ref_inst_02-600x600.jpg"
  bg_image : "images/backgrounds/AM_Ref_inst_02-600x600.jpg"
  button:
    enable : false
    label : "demander un devis"
    link : "#contacts"

################################# testimonial #########################################
testimonial:
  enable : false
  subtitle : "Testimonials"
  title : "What Clients Are Say?"
  testimonial_item:
    # testimonial item loop
    - client_image : "images/testimonial/client-1.jpg"
      name : "Dominic Allen"
      designation : "Designer"
      content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed eiusmod tempor incididunt ut labore dolore magna aliqua.enim ad minim veniam.quis nostrud exercitation ullamco laboris nis aliquip ex ea commodo consequat. duis aute irure dolor in reprehen."
      
    # testimonial item loop
    - client_image : "images/testimonial/client-2.jpg"
      name : "Alex Pitt"
      designation : "Designer"
      content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed eiusmod tempor incididunt ut labore dolore magna aliqua.enim ad minim veniam.quis nostrud exercitation ullamco laboris nis aliquip ex ea commodo consequat. duis aute irure dolor in reprehen."

    # testimonial item loop
    - client_image : "images/testimonial/client-3.jpg"
      name : "John Doe"
      designation : "Designer"
      content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed eiusmod tempor incididunt ut labore dolore magna aliqua.enim ad minim veniam.quis nostrud exercitation ullamco laboris nis aliquip ex ea commodo consequat. duis aute irure dolor in reprehen."

################################# partners #########################################
partners:
  enable : false
  subtitle : "PARTNERS"
  title : "Our Strategic Partners"
  partners_item:


    # partners item loop
    - partner_logo : "images/partners/partner-3.png"
      name : "The Moroccan Agency for Investment and Export Development"
      description : "[Visit site](https://amdie.gov.ma/)"

    # partners item loop
    - partner_logo : "images/partners/partner-2.png"
      name : "The U.S. International Development Finance Corporation"
      description : "[Visit site](https://www.dfc.gov/)"
    # partners item loop
    - partner_logo : "images/partners/partner-1.jpg"
      name : "Advanced Material Solutions"
      description : "[Visit site](https://silicongases.com/polysilicon)"


################################# blog ################################################
blog:
  enable : false
  section : "blog"
  show_item : 3
  # blog post comes from "content/*/blog" folder

################################# contacts ################################################
contact:
  enable : true
  image : "images/globe.jpg"

  form_fields:
  # form item
  - id: "name"
    label: "Nom"
    type: input
    input_type: text
    placeholder: "Nom *"
    name: "entry.1436542053"
    maxlength: 255
    required: true

  # form item
  - id:  "email"
    label: "Email"
    type: input
    input_type: email
    placeholder: "Email *"
    name: "emailAddress"
    pattern: '^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$'
    maxlength: 255
    required: true

  # form item
  - id:  "confirm_email"
    label: "Confirmez votre email"
    type: input
    input_type: email
    placeholder: "Confirmez votre email *"
    name: "entry.1404406591"
    pattern: '^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$'
    maxlength: 255
    required: false
    hidden: true

  # form item
  - id:  "phone"
    label: "Telephone"
    type: input
    input_type: text
    placeholder: "Telephone"
    name: "entry.1333006019"
    maxlength: 15
    required: false

  # form item
  - id:  "subject"
    label: "Sujet du message"
    type: input
    input_type: text
    placeholder: "Sujet du message"
    name: "entry.2008139399"
    maxlength: 255
    required: false

  # form item
  - id:  "message"
    label: "Votre message"
    type: textarea
    input_type: text
    placeholder: "Votre message *"
    name: "entry.1150758010"
    maxlength: 400
    required: true

  # form item
  - id : "language"
    label: "Langue"
    type: select
    input_type: text
    placeholder: "Langue"
    name: "entry.740536652"
    required: false
    hidden: true
    default: "FR"

---
