<!-- 所有从.vuepress/public"引用的素材，必须加上 config.js中的base 参数 （base参数指定Github仓库名称）
     所有引用的 .md 文件，必须引用为 .html (名字相同)
-->

<template>
    <div class="homepage-container">
      <!-- Header -->
      <header class="homepage-header">
        <div class="logo">
          <router-link to="/">
            <img src="/blog/logo2.png" alt="Site Logo" />
          </router-link>
        </div>
        
        
        <nav class="main-nav">
          <SearchBox/>
          <ul>
            <li><router-link to="/About">关于</router-link></li>
            <!-- <li><router-link to="/Photography">Topics</router-link></li> -->
            <!-- <li><router-link to="/books">Books</router-link></li> -->
            <!-- <li><router-link to="/blog">Blog</router-link></li> -->
            <li class="dropdown" @click.stop="toggleTools">
              <button class="dropdown-btn"><b>工具</b></button>
            </li>

            <li class="dropdown" @click.stop="toggleDropdown">
              <button class="dropdown-btn"><b>更多主题</b></button>
            </li>
          </ul>
        </nav>
      </header>
      
    <div v-if="toggleToolsOpen" class ="dropdown-tools">
        <h1>有用的工具</h1>
        <li> <a href="https://dofsimulator.net/" target="_blank"> 景深模拟器 </a></li>
        <li><router-link to="/Photography">摄影</router-link></li>
        <li><router-link to="/Mathematics">数学</router-link></li>
        <li><router-link to="/Web">网页</router-link></li>
        
    </div>

    <div v-if="dropdownOpen" class="dropdown-content">
        <!-- <h3>话题</h3> -->
        <div style="text-align:center;">
          <router-link to="/">
            <img src="/blog/logo2.png" alt="Site Logo" width="100px"/>
          </router-link>
        </div>
        <li><router-link to="/Reading">阅读</router-link></li>
        <li><router-link to="/Photography">摄影</router-link></li>
        <li><router-link to="/Mathematics">数学</router-link></li>
        <li><router-link to="/Web">网页</router-link></li>
                
    </div>





      <!-- Main Hero Section -->
      <div class="hero-section">
        <div class="hero-image">
            <router-link to="/Web/vuepress.html">
                <img src="/blog/homepage/web_dev.jpeg" alt="Hero Image" />
            </router-link>
          
        </div>
        <div class="hero-content">
          <h1>Web学习和开发</h1>
          <p>
            <router-link to="/Web/vuepress.html">
                这是我学习和开发Web网页的记录与分享。在这个过程中，我探索了一些前端技术，并深入实践了VuePress——一个基于Vue.js的静态网页生成器。
            </router-link>
          </p>
          <blockquote>
            2024年8月15日
          </blockquote>
        </div>
    </div>
  
      <!-- Featured Articles Section -->
      <section class="featured-articles">
        <h4>最近更新：</h4>
        <div class="articles-grid">
          <div class="article-card" v-for="article in featuredArticles" :key="article.id">
            <router-link :to="article.link">
              <img :src="article.image" :alt="article.title" />
              <h3>{{ article.title }}</h3>
              <p>{{ article.summary }}</p>
            </router-link>
          </div>
        </div>
      </section>
  
      <!-- Topics Section -->
      <section class="topics-section">
        <h2>主题：</h2>
        <div class="topics-grid">
          <div class="topic-card" v-for="topic in topics" :key="topic.id">
            <router-link :to="topic.link">
              <img :src="topic.image" :alt="topic.name" />
              <h3>{{ topic.name }}</h3>
            </router-link>
          </div>
        </div>
      </section>
  

    <!-- Footer -->
    <footer class="homepage-footer">
        <div class="footer-content">
          <p>&copy; 2024 Your Name. All Rights Reserved.</p>
          <nav class="footer-nav">
            <ul>
              <li><router-link to="/privacy">Privacy Policy</router-link></li>
              <li><router-link to="/terms">Terms of Service</router-link></li>
              <li><router-link to="/contact">Contact</router-link></li>
            </ul>
          </nav>
        </div>
    </footer>


      <!-- Blurred Background Overlay -->
      <div v-if="dropdownOpen" class="blurred-overlay" @click.stop="toggleDropdown"></div>
      <div v-if="toggleToolsOpen" class="blurred-overlay" @click.stop="toggleTools"></div>
    </div>


  </template>
  


  <script>
  import SearchBox from '@SearchBox'

  export default {
    components: {SearchBox},

    data() {
      return {
        featuredArticles: [
          {
            id: 1,
            title: "GTD: 打造高效工作与生活的新思维",
            summary: "GTD提供了一套行之有效的方法论，帮助我们理清思路，提升工作效率，达成心灵的平静。",
            image: "/blog/homepage/gtd.jpg",
            link: "/Reading/GTD.html"
          },
          {
            id: 2,
            title: "探索《高效能人士的七个习惯》",
            summary: "《高效能人士的七个习惯》由斯蒂芬·柯维（Stephen R. Covey）撰写，已成为全球经典的个人发展指南。",
            image: "/blog/homepage/seven_habits.jpeg",
            link: "/Reading/高效能人士的七个习惯.html"
          },
          {
            id: 3,
            title: "工作之余：捕捉生活的瞬间",
            summary: "从晨曦中的第一缕阳光到傍晚时分的温暖余晖，每一个瞬间都蕴藏着无尽的故事。",
            image: "/blog/photos/DSC_2950.jpg",
            link: "/Photography/AfterWork.html"
          },
          {
            id: 4,
            title: "偏微分方程数值解的探索之旅：谱方法",
            summary: "谱方法，一种强大的数值解法，利用了正交函数空间，通过高精度的近似来解决偏微分方程问题。",
            image: "/blog/homepage/pde.png",
            link: "/Mathematics/"
          },
          // Add more articles as needed
        ],
        topics: [
          {
            id: 1,
            name: "摄影",
            image: "/blog/homepage/photography.jpeg",
            link: "/Photography/"
          },
          {
            id: 2,
            name: "阅读",
            image: "/blog/homepage/reading.jpeg",
            link: "/Reading/"
          },
          {
            id: 3,
            name: "数学",
            image: "/blog/homepage/mathematics.jpg",
            link: "/Mathematics/"
          },
          {
            id: 4,
            name: "音频",
            image: "/blog/homepage/audio.jpeg",
            link: "/Audio/"
          },
          // Add more topics as needed
        ],
        dropdownOpen: false,
        toggleToolsOpen: false,
      };
    },


    methods: {
      toggleDropdown() {
        this.dropdownOpen = !this.dropdownOpen;
      },
      toggleTools() {
        this.toggleToolsOpen = !this.toggleToolsOpen;
      },
    //   updateBox2Position() {
    //   const box1 = document.querySelector("hompage-container");
    //   const box2 = document.querySelector("drowdown-content");

    //   if (box1 && box2) {
    //     // 获取 box1 的位置信息
    //     const box1Rect = box1.getBoundingClientRect();
    //     const box2Left = box1Rect.right + window.scrollX; // 加上滚动位置
    //     // 设置 box2 的位置
    //     box2.style.position = 'fixed';
    //     // 设置 box2 的位置
    //     box2.style.right = `${box2Left}px`;
    //     box2.style.top = `${box1Rect.top}px`; // 可以根据需要调整 box2 的 vertical 位置
    //     // box2.style.top = "1000px";
    //   }
    // },
    },

    // mounted() {
    //     // 初始化时设置 box2 的位置
    //     this.updateBox2Position();
    //     // 添加事件监听器
    //     window.addEventListener('resize', this.updateBox2Position);
    //     window.addEventListener('scroll', this.updateBox2Position);
    //     },
    //     beforeDestroy() {
    //         // 在组件销毁前移除事件监听器
    //         window.removeEventListener('resize', this.updateBox2Position);
    //         window.removeEventListener('scroll', this.updateBox2Position);
    //     },
  };
  </script>
  
  <style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans&family=Roboto:wght@400;700&display=swap');


   body {
    font-family: 'Noto Sans SC', 'Roboto', sans-serif; /* 先为中文设置Noto Sans SC，再为英文设置Roboto */
   }


  /* General Styles */
  .homepage-container {
    position: relative;
    /* background-color: #e9ecef; */
    font-family: Arial, sans-serif;
    max-width: 1200px;
    margin: 0 auto;
    /* padding: 0 20px; */
    /* font-family: 'Open Sans', sans-serif; */
  }
  
  /* Header Styles */
  .homepage-header {
    text-align: justify;
    position: fixed;
    display: flex;
    justify-content: space-between; /* 左右分布 */
    /* align-items: center; */
    /* padding: 10px; */
    background-color: #ffffff;
    border-bottom: 1px solid #b1b0b0;
    z-index: 8;
    top: 0;
    margin-left: 0px;
    margin-right: 0px;
    /* width: 90%; */
    max-width: 1200px;
    width: 100%;
  }
  
  .logo img {
    display: flex;
    max-width: 150px;
    max-height: 50px;
    
  }
  
  .main-nav {
    display: flex;
    /* text-align: right; */
    padding-top: 10px;
    z-index: 8;
  }

  .main-nav ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .main-nav ul li {
    margin-right: 20px;
    position: relative;
  }
  
  .main-nav ul li a {
    text-decoration: none;
    color: #333;
  }
  
  /* Dropdown Menu */
  .dropdown-btn {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 16px;
    color: #333;
  }
  
  .dropdown-tools {
    /* text-align: center; */
    position: fixed; 
    background: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    padding: 10px;
    z-index: 10;
    width: 200px;
    height: 300px; /* 设置高度 */
    top: 20px;
    right: calc(20px + 10vw);
    /* top: 0; */
    /* margin-left: auto; */
  }

  .dropdown-content {
    /* text-align: center; */
    position: fixed; 
    background: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    padding: 10px;
    z-index: 10;
    width: 200px;
    height: 300px; /* 设置高度 */
    top: 20px;
    right: calc(20px + 10vw);
    /* top: 0; */
    /* margin-left: auto; */
  }

  @media (max-width: 1600px) { /*680 px*/
/* 屏幕宽度小于或等于 1024 像素时 */
    .dropdown-content .dropdown-tools{
        right: calc(20px + 8vw);
        /* margin-top: 100px; */
    }
}
@media (max-width: 1400px) { /*680 px*/
/* 屏幕宽度小于或等于 1024 像素时 */
.dropdown-content .dropdown-tools{
  right: calc(20px + 5vw);
  /* margin-top: 100px; */
}
}
@media (max-width: 1300px) { /*680 px*/
/* 屏幕宽度小于或等于 1024 像素时 */
.dropdown-content .dropdown-tools{
  right: calc(20px + 2vw);
  /* margin-top: 100px; */
}
}
@media (max-width: 1200px) { /*680 px*/
/* 屏幕宽度小于或等于 1024 像素时 */
.dropdown-content .dropdown-tools{
  right: calc(20px + 0vw);
  /* margin-top: 100px; */
}
}
  
  .dropdown-content ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .dropdown-content ul li {
    margin-bottom: 10px;
    padding: 5px 0;
    cursor: pointer;
  }
  
  .dropdown-content ul li a {
    text-decoration: none;
    color: #333;
  }
  
  .dropdown-content ul li a:hover {
    text-decoration: underline;
  }




  
  .blurred-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(8px);
    z-index: 9;
    pointer-events: auto; /* Allow clicks on the overlay */
  }
  
  .dropdown-open .dropdown-content {
    display: block;
  }
  
  .dropdown-open .blurred-overlay {
    pointer-events: auto; /* Allow clicks on the overlay */
  }
  
  /* Hero Section Styles */
  .hero-section {
    display: grid;
    grid-template-columns: 50% 50%; /* 定义两列，各占50%宽度 */
    gap: 0px; /* 可选：添加列间的间距 */
    align-items: center; /* 垂直居中对齐 */
    margin-top: 60px;
    max-width: 1200px;
    width: 100%;
    /* background-color: #e9ecef; */
  }
  
  .hero-content {
    /* margin-left: 30px; */
    /* margin: 30px; */
    
    max-width: 100%;
    height: auto;
    padding: 20px;
    font-size: calc(10px + 0.5vw);
  }
  
  .hero-image img {
    width: 100%;
    height: auto; 
    max-height: 400px; /*限制图片的最大高度*/
    /* background-color: #e9ecef; */
  }


  

      /* 屏幕宽度大于 1024px 时，调整CSS样式 */
  @media (max-width: 1200px) { 

  
    .hero-content {
      margin-right: 20px;
      font: 1pt;
    }
  
 
  }
  


  @media (max-width: 680px) { /*680 px*/
    /* 屏幕宽度小于或等于 1024 像素时 */
    .hero-section {
      display: flex;
      flex-direction: column;
      /* margin-top: 100px; */
    }
  
    .hero-content {
      margin-bottom: 20px;
      /* font-size: 1px; */
    }

  }
  
  /* Featured Articles Section */
  .featured-articles {
    padding-top: 10px;
    padding-bottom: 10px;

  }
  
  .articles-grid {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    /* background-color: #e9ecef; */

  }
  
  .article-card {
    text-align: center;
    flex: 1 1 calc(20% - 20px);
    /* background-color: #e9ecef; */
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .article-card  img{
    max-width: 200px;
    max-height: 600px;
  }

  .article-card p{
    text-align: left;
  }
  
  @media (max-width: 1200px) {
    .article-card {
      flex: 1 1 calc(40% - 20px);
    }
    
    .article-card img{
        flex: 1;
    }
  }
  
  @media (max-width: 768px) {
    .article-card {
      flex: 1 1 calc(40% - 20px);
    }

    .article-card img{
        flex: 1;
    }
  }
  @media (max-width: 500px) {
    .article-card {
      flex: 1 1 calc(100%);
    }

    .article-card img{
        flex: 1;
    }
  }
  
  /* Topics Section */
  .topics-section {
    padding: 40px;
  }
  
  .topics-grid {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }
  
  .topic-card {
    flex: 1 1 calc(20% - 20px);
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    max-width: 200px;
    /* height: 200px; */
  }

  .topic-card  img{
    max-width: 200px;
    height: 120px;
  }

  @media (max-width: 1024px) {
    .topic-card {
      flex: 1 1 calc(40% - 20px);
    }
  }
  
  @media (max-width: 768px) {
    .topic-card {
      flex: 1 1 calc(40% - 20px);
    }
  }
  
  /* Responsive Typography */
  body {
    font-size: 16px;
  }
  
  @media (min-width: 768px) {
    body {
      font-size: 18px;
    }
  }
  
  @media (min-width: 1024px) {
    body {
      font-size: 20px;
    }
  }
  
  /* Footer Styles */
  .homepage-footer {
    padding: 20px;
    background-color: #333;
    color: #fff;
    text-align: center;
    width: 100%;
  }
  
  .footer-nav ul {
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .footer-nav ul li {
    margin: 0 10px;
  }
  
  .footer-nav ul li a {
    color: #fff;
    text-decoration: none;
  }
  
  @media (max-width: 768px) {
    .footer-nav ul {
      flex-direction: column;
    }
  
    .footer-nav ul li {
      margin-bottom: 10px;
    }
  }
  </style>
  