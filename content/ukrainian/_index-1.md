---
########################### hero slider ############################
hero_slider:
  enable : true
  slider_item:
    # slider item
    - subtitle : "GPM Parks"
      title : "Sustainable <br>Industrial Hubs"
      content : "Developing world-class industrial ecosystems - GPM 1, GPM 2, and GPM 4 - dedicated to renewable energy 
      and strategic growth."
      bg_image_webp : "images/slider/image44.jpeg"
      bg_image : "images/slider/image44.jpeg"
      animation : "fadeInUp" # animation select from : https://daneden.github.io/animate.css/
      button:
        enable : true
        label : "more details"
        link : "project/"
        animation : "zoomIn" # animation select from : https://daneden.github.io/animate.css/
        
    # slider item
    - subtitle : "GPM Parks"
      title : "Utility-Scale <br>Solar Generation"
      content : "Utility-scale solar plants are designed to operate for 25-30 years with minimal degradation."
      bg_image_webp : "images/slider/09.png"
      bg_image : "images/slider/09.png"
      animation : "fadeInLeft" # animation select from : https://daneden.github.io/animate.css/
      button:
        enable : true
        label : "more details"
        link : "project/"
        animation : "zoomIn" # animation select from : https://daneden.github.io/animate.css/
        
    # slider item
    - subtitle : "GPM Parks"
      title : "Maximum power <br>with every panel"
      content : "Focusing on projects that are technically robust, environmentally responsible, and economically viable 
      over the long term."
      bg_image_webp : "images/slider/image5.jpg"
      bg_image : "images/slider/image5.jpg"
      animation : "fadeInRight" # animation select from : https://daneden.github.io/animate.css/
      button:
        enable : true
        label : "more details"
        link : "project/"
        animation : "zoomIn" # animation select from : https://daneden.github.io/animate.css/

################################## banner feature ############################
banner_feature:
  enable : true
  # Max use 4 item
  feature_item:
    # banner feature item loop
    - name : "Utility-Scale Solar Plants"
      icon : "fas fa-solar-panel" # font-awesome 5 : https://fontawesome.com/icons/
      content : "Large-scale photovoltaic power plants with minimal degradation."
      
    # banner feature item loop
    - name : "Solar Tracking Technology"
      icon : "fas fa-compass" # font-awesome 5 : https://fontawesome.com/icons/
      content : "Advanced horizontal-axis solar trackers for full day productivity."
      
    # banner feature item loop
    - name : "Environmental Impact Reduction"
      icon : "fas fa-leaf" # font-awesome 5 : https://fontawesome.com/icons/
      content : "Zero-emission electricity generation avoids reducing dependence on fossil fuels."


################################## about ####################################
about:
  enable : true
  subtitle : "About Us"
  title : "What GPM Parks Does"
  
  content : "GPM Parks develops, builds, owns, and operates large-scale solar photovoltaic power plants. These plants 
  convert sunlight into electricity that is delivered either to the national grid or directly to industrial consumers.
  <br><br>
  Utility-scale solar plants consist of thousands of photovoltaic panels installed on large tracts of land, supported 
  by electrical infrastructure such as inverters, transformers, and substations. These systems are designed to operate 
  for 25-30 years with minimal degradation.
  <br><br>
  GPM Parks focuses on projects that are technically robust, environmentally responsible, and economically viable over 
  the long term."
  
  bg_image : "images/backgrounds/about-us-bg.png"
  bg_image_webp : "images/backgrounds/about-us-bg.webp"
  image_webp : "images/about/image3.jpeg"
  image : "images/about/image3.jpeg"
  button:
    enable : true;
    label : "more services"
    link : "#contacts"

################################## funfacts ###############################
funfacts :
  enable : true
  funfacts_item :
    # fanfacts item loop
    - name : "Ongoing projects"
      count : "3"
      icon : "fas fa-tasks" # font-awesome 5 : https://fontawesome.com/icons/
      
    # fanfacts item loop
    - name : "Years Experience"
      count : "10"
      icon : "far fa-calendar-alt" # font-awesome 5 : https://fontawesome.com/icons/
      
    # fanfacts item loop
    - name : "Annual Production (GWh)"
      count : "67"
      icon : "fas fa-bolt" # font-awesome 5 : https://fontawesome.com/icons/
      
    # fanfacts item loop
    - name : "Projects Area (ha)"
      count : "72"
      icon : "fas fa-map" # font-awesome 5 : https://fontawesome.com/icons/
      

################################# feature ############################################
feature:
  enable : true
  subtitle : "Manufacturing & Technology"
  title : "Solar Park Technology"
  image_webp : "images/about/GPM-1-2-map.jpeg"
  image : "images/about/GPM-1-2-map.jpeg"
  content : ""
  feature_item:
    # feature item loop
    - name : "State-of-the-Art Equipment for Clean Energy Production"
      icon : "fas fa-solar-panel" # font-awesome 5 : https://fontawesome.com/icons/
      content : "The GPM 1 solar park utilizes state-of-the-art equipment designed to guarantee clean, reliable, and 
      high-performance energy production.
      <br><br> 
      - <b>Solar Tracking:</b> The panels are mounted on horizontal-axis solar trackers aligned in a North-South 
      direction. This technology allows the panels to follow the sunlight from sunrise to sunset, maximizing energy 
      production throughout the day. <br>
      - <b>Energy Conversion:</b> Photovoltaic panels capture solar energy and convert it into electricity. This output 
      is optimized by inverter systems that ensure a stable and efficient transformation of the current.<br>
      - <b>Grid Integration:</b> The energy produced is transmitted via transformer stations and delivery substations, 
      allowing for safe and seamless integration into the national electrical grid.
      <br><br> This system offers fluid, secure operation compliant with industry best practices while supplying green 
      electricity to the network."
     
      
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
    label : "more projects"
    link : "project/"
  # project item comes from "content/*/project" folder

################################# blog ################################################
cta:
  enable : true
  title : "Power Your Future with Clean Energy Solutions"
  bg_image_webp : "images/backgrounds/AM_Ref_inst_02-600x600.jpg"
  bg_image : "images/backgrounds/AM_Ref_inst_02-600x600.jpg"
  button:
    enable : false
    label : "get a quote"
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
      label: "Name"
      type: input
      input_type: text
      placeholder: "Name *"
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
      label: "Confirm Email"
      type: input
      input_type: email
      placeholder: "Confirm Email *"
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
      label: "Subject"
      type: input
      input_type: text
      placeholder: "Subject"
      name: "entry.2008139399"
      maxlength: 255
      required: false

    # form item
    - id:  "message"
      label: "Message"
      type: textarea
      input_type: text
      placeholder: "Your Message *"
      name: "entry.1150758010"
      maxlength: 400
      required: true

    # form item
    - id : "language"
      label: "Language"
      type: select
      input_type: text
      placeholder: "Language"
      name: "entry.740536652"
      required: false
      hidden: true
      default: "EN"

---
