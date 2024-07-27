
// readyGo = function () {
//   document.getElementById("ready").play();
//   document.getElementById("section0").style.display = "none";
//   document.getElementById("section1").style.display = "block";
//   section1();
// }
// startGo = function () {
  // document.getElementById("start").play();
// }
section0to1 = function () {
  document.getElementById("section0").style.display = "none";
  document.getElementById("section1").style.display = "block";
  document.getElementById("allbgm").play();
  section1()
}
section1to2 = function () {
  document.getElementById("section1").style.display = "none";
  document.getElementById("section2").style.display = "block";
  section2()
}

section2to3 = function () {
  document.getElementById("section2").style.display = "none";
  document.getElementById("section3").style.display = "block";
  section3()
}

section3to4=function(){
  document.getElementById("section3").style.display = "none";
  document.getElementById("section4").style.display = "block";
  section4()
}
section0=function(){
  setTimeout(() => {
    document.getElementById('section0_1').style.display = "block";
  }, 9000)
}


section1 = function () {
  anime({
    targets: "#section1_text",
    opacity: [0, 1],
    duration: 2000,
    delay: 500,
    easing: 'easeInOutQuad'
  })
  anime({
    targets: "#section1_1",
    opacity: [1, 0],
    duration: 5000,
    delay: 5000,
    easing: 'easeInOutQuad'
  })
  anime({
    targets: "#section1_4",
    opacity: [0, 1],
    duration: 2000,
    delay: 10000,
    easing: 'easeInOutQuad'
  })

  setTimeout(() => {
    document.getElementById('section1_text_1').innerHTML = "<strong>我：</strong>那是...什么？"
  }, 7000)
  setTimeout(() => {
    // document.getElementById('section1').style.backgroundImage = 'url("./public/image/nwback11.png")'
    document.getElementById('section1_text_1').innerHTML = "<strong>人首蛇身的奇异女人</strong>：这里是...？"
  }, 11000)
  setTimeout(() => {
    document.getElementById('section1_text_1').innerHTML = "<strong>我：</strong>人首蛇身，你...您是女娲娘娘！难道我竟在梦中进入了上古传说时代！"
  }, 16000)
  setTimeout(() => {
    document.getElementById('section1_text_1').innerHTML = "<strong>女娲</strong>：你认得我？可否请你告诉我，我是谁？"
  }, 20000)
  anime({
    targets: "#section1_2",
    opacity: [0, 0.6],
    duration: 1000,
    delay: 22000,
    easing: 'easeInOutQuad'
  })
  anime({
    targets: "#section1_3",
    opacity: [0, 1],
    duration: 1000,
    delay: 22000,
    easing: 'easeInOutQuad'
  })
  anime({
    targets: "#section1_text",
    opacity: [1, 0],
    duration: 1000,
    delay: 22000,
    easing: 'easeInOutQuad'
  })
}

// section0 = function () {
//   setTimeout(() => {
//     startGo();
//   }, 200)
//   anime({
//     targets: ".app",
//     opacity: [1, 0],
//     duration: 1000,
//     delay: 8000,
//     easing: 'easeInOutQuad'
//   })
//   anime({
//     targets: ".text1",
//     opacity: [0, 1],
//     duration: 2000,
//     delay: 9000,
//     easing: 'easeInOutQuad'
//   })
//   anime({
//     targets: "#background",
//     opacity: [0, 0.4],
//     duration: 2000,
//     delay: 9000,
//     easing: 'easeInOutQuad'
//   })
// }

section2 = function () {
  anime({
    targets: "#section2_text",
    opacity: [0, 1],
    duration: 1000,
    delay: 500,
    easing: 'easeInOutQuad'
  })
  anime({
    targets: "#section2_1",
    opacity: [0, 1],
    duration: 1000,
    delay: 4000,
    easing: 'easeInOutQuad'
  })
  // anime({
  //   targets: "#section2_2", 
  //   opacity: [0, 1],
  //   duration: 1000,
  //   delay: 8000,
  //   easing: 'easeInOutQuad'
  // })
}
section2_1 = function () {
  anime({
    targets: "#section2_1",
    opacity: [1, 0],
    duration: 1000,
    delay: 500,
    easing: 'easeInOutQuad'
  })
  setTimeout(() => {
    document.getElementById("section2_2").style.display = "block"
  }, 19000)
  // anime({
  //   targets: "#section2_2",
  //   opacity: [0, 1],
  //   duration: 2000,
  //   delay: 36000,
  //   easing: 'easeInOutQuad'
  // })
  // setTimeout(() => {
  //   document.getElementById("section2_text1").innerHTML = "<strong>我：</strong>有人称您为“女娲”，说你是华胥之女；有人称您为“凤里牺”，说你是玄凤之后；有人说您与大地联系紧密，是为“地母”；"
  // },1000)

  // setTimeout(() => {
  //   document.getElementById("section2_text1").innerHTML = "<strong>我：</strong>汉画像石中，您与伏羲分别抱持月、日，人们将您奉为“月神”；有人认为您与伏羲、神农并列上古三皇之一，是为“人皇”，或称“娲皇”。"
  // }, 6000)
  setTimeout(() => {
    document.getElementById("section2_text1").innerHTML = "<strong>我：</strong>有人认为您是母系氏族部落的女首领、是君主、是圣人、是治水英雄，又或是动（蛇、蛙等）、植物（莲花、葫芦等）之灵，甚或是聪明而有主见的人类少女......"
  }, 1000)
  setTimeout(() => {
    document.getElementById("section2_text1").innerHTML = "<strong>我：</strong>您的传说和称号遍布华夏大地，始终被千人称颂，万人敬仰！"
  }, 7000)
  setTimeout(() => {
    document.getElementById("section2_text1").innerHTML = "<strong>女娲：</strong>这么多丰富的传说！哦，你说伏羲，他确实是我的同胞兄弟。"
  }, 11000)
  setTimeout(() => {
    document.getElementById("section2_text1").innerHTML = "<strong>女娲：</strong>可这些身份都是外在所赋予我的。但是，在我的内心里，我是谁？你又是谁呢？为何如此了解我的事迹？"
  }, 15000)
  // setTimeout(() => {
  //   document.getElementById("section2_text1").innerHTML = "<strong>女娲：</strong>那么，你又是谁呢？怎么如此了解我？"
  // }, 20000)
}

section2_2 = function () {
  anime({
    targets: "#section2_2",
    opacity: [1, 0],
    duration: 1000,
    delay: 500,
    easing: 'easeInOutQuad'
  })
  document.getElementById("section2_text1").innerHTML = "<strong>我：</strong>您是华夏民族的始祖母，是您孕育化生了我们和世界，但时至今日，也有些人遗忘了您的故事。"
  setTimeout(() => {
    document.getElementById("section2_text1").innerHTML = "<strong>我：</strong>你是我的后代？我真想去看看未来我的孩子们所创造的世界！可现在，这世界仍混沌一片，我想要开辟这个世界。"
  }, 4000)
  setTimeout(() => {
    document.getElementById("section2_text1").innerHTML = "<strong>女娲：</strong>生于混沌，我将继承世界的“生”之活力和开拓意志，创造出美好的世界！你愿意与我同行吗？"
  }, 8000)
  // setTimeout(() => {
  //   document.getElementById("section2_text1").innerHTML = "<strong>女娲：</strong>可现在，这世界仍混沌一片，我...想要开辟这个世界。"
  // }, 12000)
  // setTimeout(() => {
  //   document.getElementById("section2_text1").innerHTML = "<strong>女娲：</strong>你既然来到了这里便是机缘，接下来的路，你愿意助我一臂之力吗？"
  // }, 17000)
  setTimeout(() => {
    document.getElementById("section2_3").style.display = "block"
  }, 12000)
  // anime({
  //   targets: "#section2_3",
  //   opacity: [0, 1],
  //   duration: 2000,
  //   delay: 17000,
  //   easing: 'easeInOutQuad'
  // })
  anime({
    targets: "#section2_text",
    opacity: [1, 0],
    duration: 2000,
    delay: 11000,
    easing: 'easeInOutQuad'
  })
}




section3 = function () {
  jewel('rgb(198,155,89)','section3_1')
}
section3_0 = function(){ 
  setTimeout(function () {
    document.getElementById("allbgm").volum=0.8;
  })
  anime({
    targets: "#section3_0",
    opacity: [1, 0],
    duration: 1000,
    delay: 0,
    easing: 'easeInOutQuad'
  })
  setTimeout(() => {
    document.getElementById("section3_text").style.display="block"
   },1000)
   setTimeout(() => {
    document.getElementById("section3_3").style.display="block"
   },6000)
  // anime({
  //   targets: "#section3_text",
  //   opacity: [0, 1],
  //   duration: 1000,
  //   delay: 1000,
  //   easing: 'easeInOutQuad'
  // })
  // anime({
  //   targets: "#section3_3",
  //   opacity: [0, 1],
  //   duration: 1000,
  //   delay: 2000,
  //   easing: 'easeInOutQuad'
  // })
}
section3_1=function(){
  anime({
    targets: "#section3_3",
    opacity: [1, 0],
    duration: 1000,
    delay: 0,
    easing: 'easeInOutQuad'
  })
   document.getElementById("section3_text1").innerHTML = "<strong>我：</strong>传说您身具奇异，一天可以变化成七十种不同的样子，上天入地，无所不能，其中，您的内脏化为了十个神，助您造化万物。"
   setTimeout(() => {
    document.getElementById("section3_text1").innerHTML = "<strong>我：</strong>还说，您捕捉海中巨大的鳌，使其四足支撑天的四端，从而彻底将天地分开，万物才有生长的空间。"
   },5000)
   setTimeout(() => {
    document.getElementById("section3_text1").innerHTML = "<strong>我：</strong>当然了，最神奇的事迹当属“造人”了！"
   },10000)
   setTimeout(() => {
    document.getElementById("section3_text1").innerHTML = "<strong>我：</strong>人们怎么讲我造人的故事？"
   },15000)
  //  setTimeout(() => {
  //   document.getElementById("section3_text1").innerHTML = "<strong>女娲：</strong>我竟有这样的本领？我想让这世界变得充满生机、活力，欢声、笑语！"
  //  },20000)
  //  setTimeout(() => {
  //   document.getElementById("section3_text1").innerHTML = "<strong>女娲：</strong>我的造物，最好能像我一样，有能让世界变得更好的能力！但是我要用什么办法造才能最符合我的要求呢？"
  //  },25000)
   setTimeout(() => {
    document.getElementById("section3_4").style.display="block"
   },17000)
}

section3_2=function(){
  anime({
    targets: "#section3_4",
    opacity: [1, 0],
    duration: 1000,
    delay: 100,
    easing: 'easeInOutQuad'
  })
    document.getElementById("section3_text1").innerHTML = "<strong>女娲：</strong>我竟有这样的本领？我想造出很多人，让这世界变得充满生机、活力，欢声、笑语！"
  //  setTimeout(() => {
  //   document.getElementById("section3_text1").innerHTML = "<strong>我：</strong>还说，您捕捉海中巨大的鳌，使其四足支撑天的四端，从而彻底将天地分开，万物才有生长的空间。当然了，最神奇的事迹当属“造人”了！"
  //  },4000);
  //  setTimeout(() => {
  //   document.getElementById("section3_text1").innerHTML = "<strong>我：</strong>人们怎么讲我造人的故事？"
  //  },8000);
  //  setTimeout(() => {
  //   document.getElementById("section3_text1").innerHTML = "<strong>我：</strong>我竟有这样的本领？我想造出很多人，让这世界变得充满生机、活力，欢声、笑语！"
  //  },10000);
  //  setTimeout(() => {
  //   document.getElementById("section3_text").style.opacity = 0
  //  },14000);
  setTimeout(() => {
    document.getElementById("section3_5").style.display = "block";
    document.getElementById("section3_text").style.opacity = 0
    document.getElementById("section3_9").style.display = "block";
   },4000)
   setTimeout(() => {
    document.getElementById("section3_6").style.display = "block";
   },9000)
  setTimeout(() => {
    document.getElementById("section3_9").style.display = "none";
    document.getElementById("section3_text").style.opacity = 1
    document.getElementById("section3_text1").innerHTML = "<strong>我：</strong>为什么你有蛇的尾巴，却造出长着双脚的我们？"
   },13000)
   setTimeout(() => {
    document.getElementById("section3_text1").innerHTML = "<strong>女娲：</strong>我希望她们不要像我一样，只能在大地上匍匐，而是要能在世界中行走、跳跃、穿梭，去探索未知的奥秘。"
   },16000)
   setTimeout(() => {
    document.getElementById("section3_text1").innerHTML = "<strong>女娲：</strong>我想要她们双足站立，支撑着笔直的脊梁，成为真正的“人”！"
   },20000)
   setTimeout(() => {
    document.getElementById("section3_text1").innerHTML = "接下来，她为了帮助人们更好地生存，发明了诸多手艺教给她的孩子们。"
    document.getElementById("section3_7").style.display = "block";
    // document.getElementById("section3_7_1").style.display = "block";
    // document.getElementById("section3_text").style.opacity = 0
   },24000)
}

section4 = function () {
  jewel('rgb(116,142,138)','section4_1')
  // document.getElementById("section4_text").style.opacity = 0;
}
section4_0 = function(){
  document.getElementById("allbgm").volum=0.8;
  setTimeout(function(){
    document.getElementById("section4_text").style.display = "block";
  },500)
  anime({
    targets: "#section4_0",
    opacity: [1, 0],
    duration: 500,
    delay: 0,
    easing: 'easeInOutQuad'
  })
  setTimeout(function(){
    document.getElementById("section4_3").style.display = "block";
  },4000)
  // anime({
  //   targets: "#section4_text",
  //   opacity: [0, 1],
  //   duration: 1000,
  //   delay: 0,
  //   easing: 'easeInOutQuad'
  // })
  // setTimeout(() => {
  //   document.getElementById("section4_text1").innerHTML = "<strong>女娲：</strong>然而，随着日月轮转，时光流逝，我的孩子们的身体在逐渐老化。她们并非像我一样是永生的，总有一天会重新化作一抔黄土！"
  //  },8000)
  //  setTimeout(() => {
  //   document.getElementById("section4_text1").innerHTML = "<strong>女娲：</strong>若是重新抟土造人，她们新创造的事物就不会有人记得。我该怎么办，才能让她们自己传承下去呢？"
  //  },13000)
  //  anime({
  //   targets: "#section4_3",
  //   opacity: [0, 1],
  //   duration: 1000,
  //   delay: 5000,
  //   easing: 'easeInOutQuad'
  //  })
}

section4_1=function(){
  anime({
    targets: "#section4_3",
    opacity: [1,0],
    duration: 1000,
    easing: 'easeInOutQuad'
   })
    document.getElementById("section4_text1").innerHTML = "<strong>我：</strong>男女交媾，就会拥有新的生命。"
   setTimeout(() => {
    document.getElementById("section4_text1").innerHTML = "<strong>女娲：</strong>初创人类之时，我只造了女人，是因为我有所恐惧。男女之别正如我与伏羲：伏羲掌管太阳，我掌管月亮，日月交替轮转，为世界带来光明。"
   },3000)
   setTimeout(() => {
    document.getElementById("section4_text1").innerHTML = "<strong>女娲：</strong>但是我总害怕我的光辉被他笼罩，所以我也害怕女人终究弱于身体更强壮的男人。"
   },7000)
   setTimeout(() => {
    document.getElementById("section4_text1").innerHTML = "<strong>女娲：</strong>现在，我知道我也散发着独特的光辉，拥有创造和守护的力量，不弱于他人！。"
   },11000)
  //  setTimeout(() => {
  //   document.getElementById("section4_text1").innerHTML = "<strong>女娲：</strong>现在，我想去和我的兄长伏羲谈一谈，我已经学会了自立自爱，我自己也散发着闪耀的光辉，不会再害怕他了！"
  //  },17000)
   setTimeout(() => {
    section4_12()
  },15000)
}
section4_2=function(){
  anime({
    targets: "#section4_3",
    opacity: [1,0],
    duration: 1000,
    easing: 'easeInOutQuad'
   })
   setTimeout(() => {
    document.getElementById("section4_text1").innerHTML = "<strong>女娲：</strong>初创人类之时，我只造了女人，是因为我有所恐惧。男女之别正如我与伏羲：伏羲掌管太阳，我掌管月亮，日月交替轮转，为世界带来光明。"
   },0)
   setTimeout(() => {
    document.getElementById("section4_text1").innerHTML = "<strong>女娲：</strong>但是我总害怕我的光辉被他笼罩，所以我也害怕女人终究弱于身体更强壮的男人。"
   },3000)
   setTimeout(() => {
    document.getElementById("section4_text1").innerHTML = "<strong>女娲：</strong>现在，我知道我也散发着独特的光辉，拥有创造和守护的力量，不弱于他人！。"
   },7000)
  setTimeout(() => {
    section4_12()
  },11000)
}

section4_12=function(){
  document.getElementById("section4_text").style.opacity=0;
  document.getElementById("section4_4").style.display="block"
  setTimeout(() => {
     document.getElementById("section4_5").style.display="block"
  },4000)
  setTimeout(() => {
    document.getElementById("section4_text").style.opacity=1;
    document.getElementById("section4_text1").innerHTML = "<strong>女娲：</strong>我将我和伏羲之间的爱注入在这些泥人中，他们将一直受到太阳和月亮的祝福。"
  },7000)
  setTimeout(() => {
    document.getElementById("section4_text1").innerHTML = "<strong>女娲：</strong>他们会继续组建家庭、孕育后代，通过“人”的努力与选择，实现与“爱”同行，让“人”永生！"
  },11000)
  setTimeout(() => {
    document.getElementById("section4_6").style.display = "block"
  },15000)
}

section4_3=function(){
  anime({
    targets: "#section4_6",
    opacity: [1,0],
    duration: 1000,
    easing: 'easeInOutQuad'
   })
   document.getElementById("section4_text1").innerHTML = "<strong>女娲：</strong>我希望人能先学会自立自爱，完善自己的灵魂，然后用真正的自己去接触他人，去爱他人。通过这样的爱去找到彼此适合的伴侣，延续人间烟火气。"
   setTimeout(() => {
    document.getElementById("section4_text1").innerHTML = "<strong>我：</strong>这才是真正的爱！"
  },5000)
  setTimeout(() => {
    document.getElementById("section4").style.display = "none";
    document.getElementById("section5").style.display = "block";
    section5()
  },8000)
}

section5 = function () {
  jewel('rgb(192,55,26)','section5_1')
}
section5_0 = function () {
  setTimeout(() => {
    document.getElementById("section5_text").style.display = "block";
    document.getElementById("allbgm").volum=0.8;
  },500)
  anime({
    targets: "#section5_0",
    opacity: [1, 0],
    duration: 500,
    delay: 0,
    easing: 'easeInOutQuad'
  })
  setTimeout(() => {
    document.getElementById("section5_text1").innerHTML = "<strong>女娲：</strong>我不能只造福人类的物质生活，也要提升他们的精神修养。"
  },3000)
  setTimeout(() => {
    document.getElementById("section5_text1").innerHTML = "<strong>女娲：</strong>万物之声自有玄妙——溪水流动之声，风吹林动之声，玉石相击之声，总能让我心情平静。"
  },7000)
  setTimeout(() => {
    document.getElementById("section5_text1").innerHTML = "<strong>女娲：</strong>我与夫君伏羲一同总结规律，创音律。我相信，音乐能陶冶情操，修身养性，使人温和、善良、宽容，从而和谐社会。"
  },11000)
  setTimeout(() => {
    document.getElementById("section5_text1").innerHTML = "<strong>女娲：</strong>让我来发明更多乐器，给这个世界带来更多美妙的声音。这样“人”能有礼可依，有俗可循，一起欣赏吧！"
  },15000)
  setTimeout(() => {
    document.getElementById("section5_3").style.display = "block";
  },19000)
  // anime({
  //   targets: "#section5_text",
  //   opacity: [0, 1],
  //   duration: 1000,
  //   delay: 3500,
  //   easing: 'easeInOutQuad'
  // })
  // anime({
  //   targets: "#section5_3",
  //   opacity: [0, 1],
  //   duration: 1000,
  //   delay: 8000,
  //   easing: 'easeInOutQuad'
  // })
}
section5_3_1=function(){
  document.getElementById("allbgm").volum=0.2;
  document.getElementById("section5").style.backgroundImage = "url('./public/image/nwback4.jpg')"
  anime({
    targets: "#section5_3",
    opacity: [1, 0],
    duration: 1000,
    easing: 'easeInOutQuad'
  })
  document.getElementById("start").play();
  setTimeout(() => {
    document.getElementById("section5_text1").innerHTML = "<strong>女娲：</strong>这些乐音代表着“人”这一生中有不同的含义。"
  },7000)
  setTimeout(() => {
    document.getElementById("section5_4").style.display = "block"
  },8000)
}
section5_3_2=function(){
  document.getElementById("allbgm").volum=0.2;
  document.getElementById("section5").style.backgroundImage = "url('./public/image/nwback4.jpg')"
  anime({
    targets: "#section5_3",
    opacity: [1, 0],
    duration: 1000,
    easing: 'easeInOutQuad'
  })
  document.getElementById("start").play();
  setTimeout(() => {
    document.getElementById("section5_text1").innerHTML = "<strong>女娲：</strong>这些乐音代表着“人”这一生中有不同的含义。"
  },7000)
  setTimeout(() => {
    document.getElementById("section5_4").style.display = "block"
  },8000)
}
section5_3_3=function(){
  document.getElementById("allbgm").volum=0.2;
  document.getElementById("section5").style.backgroundImage = "url('./public/image/nwback4.jpg')"
  anime({
    targets: "#section5_3",
    opacity: [1, 0],
    duration: 1000,
    easing: 'easeInOutQuad'
  })
  document.getElementById("start").play();
  setTimeout(() => {
    document.getElementById("section5_text1").innerHTML = "<strong>女娲：</strong>这些乐音代表着“人”这一生中有不同的含义。"
  },7000)
  setTimeout(() => {
    document.getElementById("section5_4").style.display = "block"
  },8000)
}
section5_3_4=function(){
  document.getElementById("allbgm").volum=0.2;
  document.getElementById("section5").style.backgroundImage = "url('./public/image/nwback4.jpg')"
  anime({
    targets: "#section5_3",
    opacity: [1, 0],
    duration: 1000,
    easing: 'easeInOutQuad'
  })
  setTimeout(() => {
    document.getElementById("section5_text1").innerHTML = "<strong>女娲：</strong>这些乐音代表着“人”这一生中有不同的含义。"
  },4000)
  setTimeout(() => {
    document.getElementById("section5_4").style.display = "block"
  },6000)
}

// section5_1=function(){
//   anime({
//     targets: "#section5_3",
//     opacity: [1, 0],
//     duration: 1000,
//     easing: 'easeInOutQuad'
//   })
//   document.getElementById("start").play();
//   setTimeout(() => {
//     document.getElementById("section5_text1").innerHTML = "<strong>女娲：</strong>这些乐音代表着“人”这一生中有不同的含义。"
//   },7000)
//   setTimeout(() => {
//     document.getElementById("section5_4").style.display = "block"
//   },8000)
// }
section5_3=function(){
  anime({
    targets: "#section5_4",
    opacity: [1, 0],
    duration: 1000,
    easing: 'easeInOutQuad'
  })
  document.getElementById("section5_text1").innerHTML = "<strong>女娲：</strong>琴瑟之声流畅清澈如潺潺溪水，笙簧之声清脆悦耳如百鸟啼鸣。"
  setTimeout(() => {
    document.getElementById("allbgm").volum=0.8;
    document.getElementById("section5_text1").innerHTML = "<strong>女娲：</strong>“我有嘉宾，鼓瑟吹笙”，琴瑟与笙簧合鸣，舒缓又灵动，可以协调氛围，使人尊敬、礼让他人，象征着和谐互敬的社会关系。"
  },3000)
  setTimeout(() => {
    document.getElementById("section5_text1").innerHTML = "<strong>女娲：</strong>同时，笙簧形如葫芦，是婚姻与繁殖的象征，其声欢快活泼，使人心情愉悦，有助于家庭和谐，互帮互助，共享天伦之乐。"
  },7000)
  setTimeout(() => {
    document.getElementById("section5_text1").innerHTML = "<strong>女娲：</strong>而埙箫之声深沉凝重如风穿低谷，使人凝神静气，反躬自省，学会三思而后行，有助于沉淀心神，修身养性，避免冲突。"
  },11000)
  setTimeout(() => {
    document.getElementById("section5").style.display = "none";
    document.getElementById("section6").style.display = "block";
   section6()
  },15000)
}
section5_2=function(){

}
section6=function(){
  jewel('rgb(102,110,65)','section6_1')
}
section6_0=function(){
  setTimeout(function () {
    document.getElementById("allbgm").volum=0.8;
    document.getElementById("section6_text").style.display = "block";
  })
  anime({
    targets: "#section6_0",
    opacity: [1, 0],
    duration: 500,
    delay: 0,
    easing: 'easeInOutQuad'
  })
  // anime({
  //   targets: "#section6_text",
  //   opacity: [0, 1],
  //   duration: 1000,
  //   delay: 3500,
  //   easing: 'easeInOutQuad'
  // })
  setTimeout(() => {
    document.getElementById("section6_text1").innerHTML = "<strong>我：</strong>可人这一生并不都是平安的。人诞生于自然，却拥有超越自然的灵志。"
  },4000)
  setTimeout(() => {
    document.getElementById("section6_text1").innerHTML = "<strong>我：</strong>在雄伟的大自然面前，这比肩神明的灵性与脆弱的人类之躯之间的矛盾，总是带来苦痛。"
  },7000)
  setTimeout(() => {
    document.getElementById("section6_7").style.display = "block"
  },10000)
}

section6_5=function(){
  setTimeout(() => {
    document.getElementById("section6_text").style.opacity= 0;
    document.getElementById("section6_3").style.display = "block"
    document.getElementById("section6_8").style.display = "block"
    document.getElementById("shbf").play();
  },500)
  setTimeout(() => {
    document.getElementById("section6_text").style.opacity=1;
    document.getElementById("section6_text1").innerHTML = "<strong>女娲：</strong>我必须站出来制止这场无休止的战争，阻止危害继续蔓延。你愿意和我一起吗？"
  },5000)
  setTimeout(() => {
    document.getElementById("section6_4").style.display = "block"
  },8000)

  // anime({
  //   targets: "#section6_4",
  //   opacity: [0, 1],
  //   duration: 1000,
  //   delay: 16000,
  //   easing: 'easeInOutQuad'
  // })
}
section6_1=function(){
  document.getElementById("section6_8").style.display = "none"
  anime({
    targets: "#section6_4",
    opacity: [1, 0],
    duration: 1000,
    // delay: 16000,
    easing: 'easeInOutQuad'
  })
  setTimeout(() => {
    document.getElementById("section6_text1").style.opacity = 1;
    document.getElementById("section6_text1").innerHTML = "<strong>女娲：</strong>这是最后一块黑色神石，它代表着黎明前的黑暗，也是人类自己需要克制的恶，你现在已经拥有了炼化五色石的所有材料，"
  },1000)
  setTimeout(() => {
    document.getElementById("section6_text1").innerHTML = "<strong>女娲：</strong>它会带来新的希望。请你和我一起重新照亮人间！"
  },5000)
  setTimeout(() => {
    document.getElementById("section6_5").style.display = "block"
  },8000)
}
section6_3=function(){
  document.getElementById("section6_5").style.display = "none"
  document.getElementById("shbf").pause();
  //这里要换背景
  document.getElementById("section6_9").style.display = "block"
  document.getElementById("section6_text1").innerHTML = "女娲取来神火炼化五色石，她举起光华流转的神石，奋力飞向天空。漏洞被五彩石填补，洪水退去，乌云散尽，人世重归秩序。经此一役，天与地、神与人之间的分隔越加清晰。"
  section7()
}

section7=function(){
  document.getElementById("section6").style.display = "none";
  document.getElementById("section7").style.display = "block";
  jewel('rgb(53, 48, 47)','section7_1')
}
section7_0 =function(){
  setTimeout(function () {
    document.getElementById("allbgm").volum=0.8;
    document.getElementById("section7_text").style.display = "block";
  })
  anime({
    targets: "#section7_0",
    opacity: [1, 0],
    duration: 500,
    delay: 0,
    easing: 'easeInOutQuad'
  })
  setTimeout(() => {
    document.getElementById("section7_text1").innerHTML = "<strong>我：</strong>我们的力量越来越强大，对世界的伤害却也越来越大，并蚕食着人类自身。请您发挥神力，继续帮助人类！"
  },4000)
  setTimeout(() => {
    document.getElementById("section7_3").style.display = "block"
  },7000)
  // anime({
  //   targets: "#section7_text",
  //   opacity: [0, 1],
  //   duration: 1000,
  //   delay: 3500,
  //   easing: 'easeInOutQuad'
  // })
}

section7_1=function(){
  document.getElementById("allbgm").volum=0.8;
  anime({
    targets: "#section7_0",
    opacity: [1, 0],
    duration: 500,
    delay: 0,
    easing: 'easeInOutQuad'
  })
  document.getElementById("section7_5").style.display = "block";
}
section7_2=function(){
  // setTimeout(() => {
    document.getElementById("section7_text1").innerHTML = "<strong>女娲：</strong>人类独特的智力和创造力帮助你们掌握强大的力量。但是，永远不要小看天地之“道”。"
  // },4000)
  document.getElementById("section7_3").style.display = "none";
  setTimeout(() => {
    document.getElementById("section7_text1").innerHTML = "<strong>女娲：</strong>自然是我们共同的母亲，她时而暴躁，时而包容，她教我们珍惜生命，教我们携手共进，也教我们谦虚谨慎。"
  },3000)
  setTimeout(() => {
    document.getElementById("section7_text1").innerHTML = "<strong>女娲：</strong>你们的命运把握在自己手里，不要停止思考，继续前进吧。而我留下的五彩石之力就埋藏在你们的身体中，等待被激活，带来新的希望！"
  },6000)
  setTimeout(() => {
    document.getElementById("section7_text").style.display = "none";
   document.getElementById("section7_4").style.display = "block";
  },10000)
  setTimeout(() => {
   document.getElementById("section7_4").style.display = "none";
   document.getElementById("section7_5").style.display = "block";
  },16000)
}
finishall = function () {
   
}

// window.onload = function () {
  section0()
// }
