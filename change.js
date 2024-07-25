
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
  setTimeout(() => {
    document.getElementById('section1_text_1').innerHTML = "<strong>我：</strong>那是...什么？"
  }, 7000)
  setTimeout(() => {
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
  }, 40000)
  // anime({
  //   targets: "#section2_2",
  //   opacity: [0, 1],
  //   duration: 2000,
  //   delay: 36000,
  //   easing: 'easeInOutQuad'
  // })
  setTimeout(() => {
    document.getElementById("section2_text1").innerHTML = "<strong>我：</strong>有人称您为“女娲”，说你是华胥之女；有人称您为“凤里牺”，说你是玄凤之后；有人说您与大地联系紧密，是为“地母”；"
  },1000)

  setTimeout(() => {
    document.getElementById("section2_text1").innerHTML = "<strong>我：</strong>汉画像石中，您与伏羲分别抱持月、日，人们将您奉为“月神”；有人认为您与伏羲、神农并列上古三皇之一，是为“人皇”，或称“娲皇”。"
  }, 6000)
  setTimeout(() => {
    document.getElementById("section2_text1").innerHTML = "<strong>我：</strong>还有人认为您是母系氏族部落的女首领、是君主、是圣人、是治水英雄，又或是动（蛇、蛙等）、植物（莲花、葫芦等）之灵，甚或是聪明而有主见的人类少女......"
  }, 12000)
  setTimeout(() => {
    document.getElementById("section2_text1").innerHTML = "<strong>我：</strong>您的传说和称号遍布华夏大地，随着时空流变而千变万化，不变的是，您始终被千人称颂，万人敬仰！"
  }, 18000)
  setTimeout(() => {
    document.getElementById("section2_text1").innerHTML = "<strong>女娲：</strong>多么丰富的信仰！是的，你提到了伏羲，他确是与我同生的兄弟。"
  }, 24000)
  setTimeout(() => {
    document.getElementById("section2_text1").innerHTML = "<strong>女娲：</strong>可是，这些身份都是别人对我有所求而赋予我的，我会去做我应当且想做的事情。但是，在我对自身探索的诉求中，我自己是谁，只有我自己可以决定！。"
  }, 30000)
  setTimeout(() => {
    document.getElementById("section2_text1").innerHTML = "<strong>女娲：</strong>那么，你又是谁呢？怎么如此了解我？"
  }, 36000)
}

section2_2 = function () {
  anime({
    targets: "#section2_2",
    opacity: [1, 0],
    duration: 1000,
    delay: 500,
    easing: 'easeInOutQuad'
  })
  document.getElementById("section2_text1").innerHTML = "<strong>我：</strong>我，和我的民族，我们都是您的子民！"
  setTimeout(() => {
    document.getElementById("section2_text1").innerHTML = "<strong>我：</strong>时至今日的科技时代，人们仍然信奉您！"
  }, 3000)
  setTimeout(() => {
    document.getElementById("section2_text1").innerHTML = "<strong>女娲：</strong>你是我的后代？果然和我及伏羲长得很像。我真想去看看未来我的孩子们所创造的世界！"
  }, 7000)
  setTimeout(() => {
    document.getElementById("section2_text1").innerHTML = "<strong>女娲：</strong>可现在，这世界仍混沌一片，我...想要开辟这个世界。"
  }, 12000)
  setTimeout(() => {
    document.getElementById("section2_text1").innerHTML = "<strong>女娲：</strong>你既然来到了这里便是机缘，接下来的路，你愿意助我一臂之力吗？"
  }, 17000)
  setTimeout(() => {
    document.getElementById("section2_3").style.display = "block"
  }, 21000)
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
    delay: 20000,
    easing: 'easeInOutQuad'
  })
}




section3 = function () {
  jewel('rgb(198,155,89)','section3_1')
  setTimeout(function () {
    document.getElementById("allbgm").volum=0.8;
  },3000)
  anime({
    targets: "#section3_0",
    opacity: [1, 0],
    duration: 1000,
    delay: 3000,
    easing: 'easeInOutQuad'
  })
  anime({
    targets: "#section3_text",
    opacity: [0, 1],
    duration: 1000,
    delay: 3500,
    easing: 'easeInOutQuad'
  })
  anime({
    targets: "#section3_3",
    opacity: [0, 1],
    duration: 1000,
    delay: 8000,
    easing: 'easeInOutQuad'
  })
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
    document.getElementById("section3_text1").innerHTML = "<strong>我：</strong>当然了，最神奇的事迹当属“造人”了！您造出了像我这样和您相似的，有智慧和创造能力的“人”！"
   },10000)
   setTimeout(() => {
    document.getElementById("section3_text1").innerHTML = "<strong>我：</strong>我们是您的继承者，正如您是这神异世界的继承者一般！"
   },15000)
   setTimeout(() => {
    document.getElementById("section3_text1").innerHTML = "<strong>女娲：</strong>我竟有这样的本领？我想让这世界变得充满生机、活力，欢声、笑语！"
   },20000)
   setTimeout(() => {
    document.getElementById("section3_text1").innerHTML = "<strong>女娲：</strong>我的造物，最好能像我一样，有能让世界变得更好的能力！但是我要用什么办法造才能最符合我的要求呢？"
   },25000)
   setTimeout(() => {
    document.getElementById("section3_4").style.display="block"
   },30000)
}

section3_2=function(){
  anime({
    targets: "#section3_4",
    opacity: [1, 0],
    duration: 1000,
    delay: 100,
    easing: 'easeInOutQuad'
  })
    document.getElementById("section3_text1").innerHTML = "<strong>我：</strong>在传闻中，您用泥土、柳条等来造物。"
   setTimeout(() => {
    document.getElementById("section3_text1").innerHTML = "<strong>女娲：</strong>那么，我用河边的泥来塑形，这样我可以精准把握我的造物的形状！"
   },4000);
   setTimeout(() => {
    document.getElementById("section3_text").style.opacity = 0
   },8000);
  setTimeout(() => {
    document.getElementById("section3_5").style.display = "block";
   },9000)
   setTimeout(() => {
    document.getElementById("section3_6").style.display = "block";
   },15000)
  setTimeout(() => {
    document.getElementById("section3_text").style.opacity = 1
    document.getElementById("section3_text1").innerHTML = "<strong>我：</strong>为什么你有着蛇尾，却造出长着双脚的造物？"
   },20000)
   setTimeout(() => {
    document.getElementById("section3_text1").innerHTML = "<strong>女娲：</strong>我希望她们不要像我的本体一样，只能匍匐在大地上，而是要在世界中行走、跳跃、穿梭，去探索这个世界里未知的奥秘。"
   },24000)
   setTimeout(() => {
    document.getElementById("section3_text1").innerHTML = "<strong>女娲：</strong>所以，既然她们双足站立，支撑着笔直的脊梁，“人”这个称呼确实非常合适！"
   },29000)
   setTimeout(() => {
    document.getElementById("section3_7").style.display = "block";
    document.getElementById("section3_7_1").style.display = "block";
    document.getElementById("section3_text").style.opacity = 0
   },34000)
}

section4 = function () {
  jewel('rgb(116,142,138)','section4_1')
  setTimeout(function () {
    document.getElementById("allbgm").volum=0.8;
  },3000)
  anime({
    targets: "#section4_0",
    opacity: [1, 0],
    duration: 1000,
    delay: 3000,
    easing: 'easeInOutQuad'
  })
  anime({
    targets: "#section4_text",
    opacity: [0, 1],
    duration: 1000,
    delay: 3500,
    easing: 'easeInOutQuad'
  })
  setTimeout(() => {
    document.getElementById("section4_text1").innerHTML = "<strong>女娲：</strong>然而，随着日月轮转，时光流逝，我的孩子们的身体在逐渐老化。她们并非像我一样是永生的，总有一天会重新化作一抔黄土！"
   },8000)
   setTimeout(() => {
    document.getElementById("section4_text1").innerHTML = "<strong>女娲：</strong>若是重新抟土造人，她们新创造的事物就不会有人记得。我该怎么办，才能让她们自己传承下去呢？"
   },13000)
   anime({
    targets: "#section4_3",
    opacity: [0, 1],
    duration: 1000,
    delay: 17000,
    easing: 'easeInOutQuad'
   })
}

section4_1=function(){
  anime({
    targets: "#section4_3",
    opacity: [1,0],
    duration: 1000,
    easing: 'easeInOutQuad'
   })
    document.getElementById("section4_text1").innerHTML = "<strong>我：</strong>我是我的父母共同生出来的。我们那时，除了女人，还有男人，正如您的兄长伏羲那样。男人、女人相互结合，共同生育和抚养自己的孩子。"
   setTimeout(() => {
    document.getElementById("section4_text1").innerHTML = "<strong>女娲：</strong>谢谢你，我的朋友。在我看来，伏羲是我的兄长，我敬仰他。他掌管着太阳，我掌管着月亮，日月交替轮转，为世界带来光明，但是我总是害怕我的光辉被他笼罩！"
   },5000)
   setTimeout(() => {
    document.getElementById("section4_text1").innerHTML = "<strong>女娲：</strong>所以我只按照自己的样子创造了女人，将她们保护起来，害怕女人被更强壮的男人欺负，现在，你让我看到了新的可能。"
   },10000)
   setTimeout(() => {
    document.getElementById("section4_text1").innerHTML = "<strong>女娲：</strong>但是，我仍然认为，人只有学会了自爱，才能更好地爱别人，无论是男人还是女人。"
   },14000)
   setTimeout(() => {
    document.getElementById("section4_text1").innerHTML = "<strong>女娲：</strong>现在，我想去和我的兄长伏羲谈一谈，我已经学会了自立自爱，我自己也散发着闪耀的光辉，不会再害怕他了！"
   },17000)
   setTimeout(() => {
    section4_12()
  },12000)
}
section4_2=function(){
  anime({
    targets: "#section4_3",
    opacity: [1,0],
    duration: 1000,
    easing: 'easeInOutQuad'
   })
  document.getElementById("section4_text1").innerHTML = "<strong>女娲：</strong>伏羲是我的兄长，我敬仰他。他掌管着太阳，我掌管着月亮，日月交替轮转，为世界带来光明，但是我总是害怕我的光辉被他笼罩！"
  setTimeout(() => {
   document.getElementById("section4_text1").innerHTML = "<strong>女娲：</strong>所以我只按照自己的样子创造了女人，将她们保护起来，害怕女人被更强壮的男人欺负。"
  },4000)
  setTimeout(() => {
   document.getElementById("section4_text1").innerHTML = "<strong>女娲：</strong>现在，我已经学会了自立自爱，我自己也散发着闪耀的光辉，不会再害怕他了！也许，在这件事上，我可以去向他寻求帮助，我们共同面对难题，带来新的希望！"
  },8000)
  setTimeout(() => {
    section4_12()
  },14000)
}

section4_12=function(){
  document.getElementById("section4_text").style.opacity=0;
  document.getElementById("section4_4").style.display="block"
  setTimeout(() => {
     document.getElementById("section4_5").style.display="block"
  },4000)
  setTimeout(() => {
    document.getElementById("section4_text").style.opacity=1;
    document.getElementById("section4_text1").innerHTML = "<strong>女娲：</strong>我将我和伏羲之间的爱注入了这些泥人当中，这些人是我们共同创造的，将会一直受到太阳和月亮的祝福。"
  },8000)
  setTimeout(() => {
    document.getElementById("section4_text1").innerHTML = "<strong>女娲：</strong>同样的，女人和男人也需要学会，自己组建家庭、孕育后代。通过“人”自己的努力与选择，实现与“爱”同行，让“人”永生！"
  },12000)
  setTimeout(() => {
    document.getElementById("section4_6").style.display = "block"
  },16000)
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
  jewel('rgb(102,110,65)','section5_1')
  setTimeout(function () {
    document.getElementById("allbgm").volum=0.8;
  },3000)
  anime({
    targets: "#section5_0",
    opacity: [1, 0],
    duration: 1000,
    delay: 3000,
    easing: 'easeInOutQuad'
  })
  anime({
    targets: "#section5_text",
    opacity: [0, 1],
    duration: 1000,
    delay: 3500,
    easing: 'easeInOutQuad'
  })
  anime({
    targets: "#section5_3",
    opacity: [0, 1],
    duration: 1000,
    delay: 8000,
    easing: 'easeInOutQuad'
  })
}
section5_1=function(){
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
section5_3=function(){
  anime({
    targets: "#section5_4",
    opacity: [1, 0],
    duration: 1000,
    easing: 'easeInOutQuad'
  })
  document.getElementById("section5_text1").innerHTML = "<strong>女娲：</strong>古代音乐与人生仪礼的关系"
  setTimeout(() => {
    document.getElementById("section5").style.display = "none";
    document.getElementById("section6").style.display = "block";
   section6()
  },5000)
}
section5_2=function(){

}
section6=function(){
  jewel('rgb(192,55,26)','section6_1')
  setTimeout(function () {
    document.getElementById("allbgm").volum=0.8;
  },3000)
  anime({
    targets: "#section6_0",
    opacity: [1, 0],
    duration: 1000,
    delay: 3000,
    easing: 'easeInOutQuad'
  })
  anime({
    targets: "#section6_text",
    opacity: [0, 1],
    duration: 1000,
    delay: 3500,
    easing: 'easeInOutQuad'
  })
  setTimeout(() => {
    document.getElementById("section6_text1").innerHTML = "<strong>我：</strong>可“人”一生并不都是平安的！"
  },7000)
  setTimeout(() => {
    document.getElementById("section6_3").style.display = "block"
    document.getElementById("shbf").play();
  },9000)
  setTimeout(() => {
    document.getElementById("section6_text1").innerHTML = "<strong>女娲：</strong>他们都是我的同胞，但我必须站出来阻止这场战争，阻止这场战争危害的继续蔓延。你愿意和我一起吗？"
  },14000)
  anime({
    targets: "#section6_4",
    opacity: [0, 1],
    duration: 1000,
    delay: 16000,
    easing: 'easeInOutQuad'
  })
}
section6_1=function(){
  anime({
    targets: "#section6_4",
    opacity: [1, 0],
    duration: 1000,
    // delay: 16000,
    easing: 'easeInOutQuad'
  })
  setTimeout(() => {
    document.getElementById("section6_text1").innerHTML = "<strong>女娲：</strong>这是我最后一块黑色石头，请你我和一起重新照亮人间！"
  },1000)
  setTimeout(() => {
    document.getElementById("section6_5").style.display = "block"
  },3000)
}
section6_3=function(){
  document.getElementById("section6_5").style.display = "none"
  document.getElementById("shbf").pause();
  section7()
}

section7=function(){
  document.getElementById("section6").style.display = "none";
  document.getElementById("section7").style.display = "block";
  jewel('rgb(53, 48, 47)','section7_1')
  setTimeout(function () {
    document.getElementById("allbgm").volum=0.8;
  },3000)
  anime({
    targets: "#section7_0",
    opacity: [1, 0],
    duration: 1000,
    delay: 3000,
    easing: 'easeInOutQuad'
  })
  anime({
    targets: "#section7_text",
    opacity: [0, 1],
    duration: 1000,
    delay: 3500,
    easing: 'easeInOutQuad'
  })
}
finishall = function () {
   
}

// window.onload = function () {
  section0()
// }
