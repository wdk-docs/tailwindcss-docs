import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect'
import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'

let testimonials = [
  // Column 1
  [
    {
      content: '我觉得自己像个白痴，直到现在才开始使用顺风CSS。',
      url: 'https://twitter.com/ryanflorence/status/1187951799442886656',
      author: {
        name: 'Ryan Florence',
        role: 'Remix & React培训',
        avatar: require('@/img/avatars/ryan-florence.jpg').default.src,
      },
    },
    {
      content:
        '如果今天我必须推荐一种进入编程的方式，那就是HTML + CSS和顺风CSS。',
      url: 'https://twitter.com/rauchg/status/1225611926320738304',
      author: {
        name: 'Guillermo Rauch',
        role: 'Vercel',
        avatar: require('@/img/avatars/guillermo-rauch.jpg').default.src,
      },
    },
    {
      content: `我没有设计技能，有了顺风，我可以轻松地制作好看的网站，这是我在CSS框架中想要的一切。`,
      author: {
        name: 'Sara Vieira',
        role: 'CodeSandbox',
        avatar: require('@/img/avatars/sara-vieira.jpg').default.src,
      },
    },
    {
      content: `顺风CSS是世界上最伟大的CSS框架。`,
      url: 'https://twitter.com/taylorotwell/status/1106539049202999296',
      author: {
        name: 'Bret "The Hitman" Hart',
        role: 'Former WWE Champion',
        avatar: require('@/img/avatars/bret-hart.jpg').default.src,
      },
    },
    {
      content: `我开始使用@tailwindcss。我立刻爱上了他们的响应式修饰器，完整的文档，以及自定义调色板的简单性。`,
      url: 'https://twitter.com/dacey_nolan/status/1303744545587441666',
      author: {
        name: 'Dacey Nolan',
        role: 'Software Engineer',
        avatar: require('@/img/avatars/dacey-nolan.jpg').default.src,
      },
    },

    {
      content: '我用的那一刻就爱上了它。',
      url: 'https://twitter.com/GTsurwa/status/1304226774491033601',
      author: {
        name: 'Gilbert Rabut Tsurwa',
        role: 'Web Developer',
        avatar: require('@/img/avatars/gilbert-rabut-tsurwa.jpg').default.src,
      },
    },
    {
      content:
        '@tailwindcss有一点很糟糕——一旦你在一些项目中使用了它，再写普通的CSS就真的很痛苦了。',
      url: 'https://twitter.com/iamgraem_e/status/1322861404781748228',
      author: {
        name: 'Graeme Houston',
        role: 'JavaScript Developer',
        avatar: require('@/img/avatars/graeme-houston.jpg').default.src,
      },
    },

    {
      content: `好吧，我正式加入了@tailwindcss的宣传列车。从来没有想过建立网站可以如此快和灵活。`,
      url: 'https://twitter.com/lukeredpath/status/1316543571684663298',
      author: {
        name: 'Aaron Bushnell',
        role: 'Programmer @ TrendyMinds',
        avatar: require('@/img/avatars/aaron-bushnell.jpg').default.src,
      },
    },
    {
      content: '@tailwindcss为我点了一下，现在我觉得自己像个#!@ % & $ %白痴。',
      url: 'https://twitter.com/ken_wheeler/status/1225373231139475458',
      author: {
        name: 'Ken Wheeler',
        role: `React Engineer`,
        avatar: require('@/img/avatars/ken-wheeler.jpg').default.src,
      },
    },
    {
      content: `过去几个月我一直在使用@tailwindcss，它很神奇。我以前已经使用过一些实用程序类，但是要使用实用程序优先……就是这条路。`,
      url: 'https://twitter.com/JadLimcaco/status/1327417021915561984',
      author: {
        name: 'Jad Limcaco',
        role: 'Designer',
        avatar: require('@/img/avatars/jad-limcaco.jpg').default.src,
      },
    },
    {
      content: `在过去的两周里，我终于在一个真正的客户端项目中使用了@tailwindcss，我再也不想手工编写CSS了。我是一个怀疑论者，但炒作是真实的。`,
      url: 'https://twitter.com/lukeredpath/status/1316543571684663298',
      author: {
        name: 'Luke Redpath',
        role: 'Ruby & iOS Developer',
        avatar: require('@/img/avatars/luke-redpath.jpg').default.src,
      },
    },
    {
      content:
        "我不认为我会喜欢@tailwindcss…花了一天的时间使用它的POC，爱它!我希望当我们开始我们的公司设计系统，认真考虑一个完整的重建",
      url: 'https://twitter.com/JonBloomer/status/1300923818622377984',
      author: {
        name: 'Jon Bloomer',
        role: 'Front-End Developer',
        avatar: require('@/img/avatars/jon-bloomer.jpg').default.src,
      },
    },
    {
      content: '@tailwindcss一开始看起来很讨厌，但现在我迷上了它。',
      url: 'https://twitter.com/droidgilliland/status/1222733372855848961',
      author: {
        name: 'Andrew Gilliland',
        role: 'Front-End Developer',
        avatar: require('@/img/avatars/andrew-gilliland.jpg').default.src,
      },
    },

    // New 1
    {
      content: '一旦你开始利用顺风，就没有回头路了。',
      url: 'https://twitter.com/pkspyder007/status/1463126688301158400',
      author: {
        name: 'Praveen Kumar',
        avatar: require('@/img/avatars/pkspyder007.jpg').default.src,
      },
    },
    {
      content:
        '我在每个项目中都使用@tailwindcss，因为它消除了css的大部分烦恼，而且速度快了好几倍',
      url: 'https://twitter.com/fanduvasu/status/1443396529558011904',
      author: {
        name: 'Vasu Bansal',
        avatar: require('@/img/avatars/fanduvasu.jpg').default.src,
      },
    },
    {
      content:
        "它改变了我的事业轨迹。我能够在1/3的时间内设计出外观更好、性能更好、更易于访问的组件。",
      url: 'https://twitter.com/lawjolla/status/1443295146959728643',
      author: {
        name: 'Dennis Walsh',
        avatar: require('@/img/avatars/lawjolla.jpg').default.src,
      },
    },
    {
      content:
        '我的第一个顺风项目运行得很好，但真正让我恼火的是，几个月后我又回到了它，节省了很多时间来做新的改变。我立刻就知道所有的东西是如何组合在一起的。',
      url: 'https://twitter.com/ericlbarnes/status/1303814860879343618',
      author: {
        name: 'Eric L. Barnes',
        avatar: require('@/img/avatars/ericlbarnes.jpg').default.src,
      },
    },
    {
      content:
        "Tailwind看起来就像意大利面条，直到我在一个实际项目中使用它。现在这是我做网站的唯一方法。简单、快速、可扩展。",
      url: 'https://twitter.com/nicksaraev/status/1304200875758428160',
      author: {
        name: 'Nick Saraev',
        avatar: require('@/img/avatars/nicksaraev.jpg').default.src,
      },
    },
    {
      content:
        '顺风是一个典型的例子，说明为什么在评估技术时你需要把先入为主的想法放在一边。它的体验和生产力远远超过了你可能认为的基于老派CSS思维的东西!',
      url: 'https://twitter.com/_lukebennett/status/1303744015943204867',
      author: {
        name: 'Luke Bennett',
        avatar: require('@/img/avatars/_lukebennett.jpg').default.src,
      },
    },
    {
      content:
        '顺风CSS是一个独一无二的框架。它不会将您限制在一个固定的设计中，而是为您提供工具和标准化，以构建您想要的东西。',
      url: 'https://twitter.com/carre_sam/status/1303750185663770625',
      author: {
        name: 'Sam Carré',
        avatar: require('@/img/avatars/carre_sam.jpg').default.src,
      },
    },
    {
      content:
        '我记得第一次看到实用优先的css时，我被吓坏了。但在过去的几个月里，在越来越多的项目中使用Tailwind已经成为一种令人愉快的在网络上构建事物的新方式。',
      url: 'https://twitter.com/evanfuture/status/1303743551583514637',
      author: {
        name: 'Evan Payne',
        avatar: require('@/img/avatars/evanfuture.jpg').default.src,
      },
    },
    {
      content:
        "当我开始使用@tailwindcss时，我最初是持怀疑态度的，直到现在我需要将@sveltejs组件复制到不同的位置，我不需要担心我的任何样式被破坏。",
      url: 'https://twitter.com/rotimi_best/status/1407010180760539136',
      author: {
        name: 'Rotimi Best',
        avatar: require('@/img/avatars/rotimi_best.jpg').default.src,
      },
    },
    {
      content: '@tailwindcss让你更擅长CSS。改变我的想法。',
      url: 'https://twitter.com/Dominus_Kelvin/status/1362891692634963973',
      author: {
        name: 'Kelvin Omereshone',
        avatar: require('@/img/avatars/Dominus_Kelvin.jpg').default.src,
      },
    },
    {
      content:
        "很棒的东西!我不是设计师或前端开发者;直到去年我发现了顺风，我从九十年代初开始就没有做过任何CSS。顺风和顺风UI意味着我现在可以快速创建美观的前端，这是非常强大的。令人印象深刻的疯狂项目。",
      url: 'https://twitter.com/JCMagoo/status/1443334891706454018',
      author: {
        name: 'John W Clarke',
        avatar: require('@/img/avatars/JCMagoo.jpg').default.src,
      },
    },
    {
      content:
        '我承认，在去年之前，我一直对@tailwindcss持怀疑态度。我想`为什么我要输入一百万个类来抽象单个CSS属性呢?`到目前为止，我觉得自己在构建ui时的效率提高了一倍。真是太神奇了。',
      url: 'https://twitter.com/tweetsofsumit/status/1460171778337083394',
      author: {
        name: 'Sumit Kumar',
        avatar: require('@/img/avatars/tweetsofsumit.jpg').default.src,
      },
    },
    {
      content:
        '我花了几个月的时间用TypeScript和@tailwindcss重写了我公司的前端，这个项目即将完成。尽管如此，每次我重新实现一个组件时，我都会想，`哇，这次简单多了。`顺风的岩石。',
      url: 'https://twitter.com/mannieschumpert/status/1445868384869134336',
      author: {
        name: 'Mannie Schumpert',
        role: 'Co-Founder/CTO @LaunchPathInc',
        avatar: require('@/img/avatars/mannieschumpert.jpg').default.src,
      },
    },

    // New 2
    // {
    //   content:
    //     'As a lazy developer, I love that I can copy/paste HTML examples that use Tailwind CSS and it just works in my app.',
    //   url: 'https://twitter.com/adamwathan/status/1468648955240230918',
    //   author: {
    //     name: 'Mark Funk',
    //     role: 'UI Engineer at Netflix',
    //     avatar: require('@/img/avatars/.jpg').default.src,
    //   },
    // },
    {
      content:
        '有了我们必须做的大量工作，跳过脑电波到CSS的转换，并能够使用Tailwind以思维的速度实现，我作为一个全栈开发人员的生活从来没有像现在这样幸福过。',
      url: 'https://twitter.com/0xholman/status/1468691614453227523',
      author: {
        name: 'Christian Holman',
        avatar: require('@/img/avatars/0xholman.jpg').default.src,
      },
    },
    {
      content:
        '顺风使得将新开发人员引入前端项目变得容易，而无需担心理解`某些`开发人员的类层次结构及其背后的思维过程。',
      url: 'https://twitter.com/jilsonthomas/status/1468678743644327942',
      author: {
        name: 'Jilson Thomas',
        role: 'UI Designer/Developer',
        avatar: require('@/img/avatars/jilsonthomas.jpg').default.src,
      },
    },
    {
      content:
        '对我们的开发团队来说，顺风完全改变了游戏规则。它允许我们更快地移动，保持UI的一致性，并专注于我们想要做的工作，而不是编写CSS。',
      url: 'https://twitter.com/jakeryansmith/status/1468668828041293831',
      author: {
        name: 'Jake Ryan Smith',
        role: 'Full-Stack Developer',
        avatar: require('@/img/avatars/jakeryansmith.jpg').default.src,
      },
    },
  ],
  // Column 2
  [
    {
      content:
        '我从事CSS工作已经超过十年了，而Tailwind让我的生活更轻松。它仍然是CSS，你可以使用flex、grid等，只是编写和维护起来更快。',
      url: 'https://twitter.com/debs_obrien/status/1243255468241420288',
      author: {
        name: `Debbie O'Brien`,
        role: 'Senior Program Manager at Microsoft',
        avatar: require('@/img/avatars/debbie-obrien.jpg').default.src,
      },
    },
    {
      content:
        '我写CSS已经有20多年了，直到2017年，我写CSS的方式经常改变。《顺风》同年上映并非巧合。它可能看起来是错误的，但是花时间研究它，你会意识到语义CSS是一个20年的错误。',
      url: 'https://twitter.com/frontendben/status/1468687028036452363',
      author: {
        name: 'Ben Furfie',
        role: 'Developer',
        avatar: require('@/img/avatars/frontendben.jpg').default.src,
      },
    },
    {
      content: '顺风让我觉得写代码就像在使用一个设计工具。',
      url: 'https://twitter.com/didiercatz/status/1468657403382181901',
      author: {
        name: 'Didier Catz',
        role: 'Co-Founder @StyptApp',
        avatar: require('@/img/avatars/didiercatz.jpg').default.src,
      },
    },
    {
      content:
        '顺风CSS正在弥合设计系统和产品之间的鸿沟。它正在成为事实上的样式化API。',
      url: 'https://twitter.com/frontstuff_io/status/1468667263532339204',
      author: {
        name: 'Sarah Dayan',
        role: 'Staff Software Engineer @Algolia',
        avatar: require('@/img/avatars/frontstuff_io.jpg').default.src,
      },
    },
    {
      content: '我再也不想写常规的CSS了。只有@tailwindcss。',
      url: 'https://twitter.com/trey/status/1457854984020762626',
      author: {
        name: 'Trey Piepmeier',
        role: 'Web Developer',
        avatar: require('@/img/avatars/trey.jpg').default.src,
      },
    },
    {
      content:
        '当我进入我的工作时，我想知道为什么最后一个开发人员会在我们的项目中执行Tailwind，几天后我就变成了一个Tailwind的转换者，并将其用于我所有的个人项目中。',
      url: 'https://twitter.com/maddiexcampbell/status/1303752658029740032',
      author: {
        name: 'Madeline Campbell',
        role: 'Full-Stack Developer',
        avatar: require('@/img/avatars/madeline-campbell.jpg').default.src,
      },
    },
    {
      content:
        '顺风让我再次享受前端开发，并给了我实现任何设计的信心——不管它有多复杂。',
      url: 'https://twitter.com/marcelpociot/status/1468664587146956803',
      author: {
        name: 'Marcel Pociot',
        role: 'CTO at @beyondcode',
        avatar: require('@/img/avatars/marcelpociot.jpg').default.src,
      },
    },
    {
      content: '顺风把我变成了一个完整的堆栈开发人员。',
      url: 'https://twitter.com/lepikhinb/status/1468665237155074056',
      author: {
        name: 'Boris Lepikhin',
        role: 'Full-Stack Developer',
        avatar: require('@/img/avatars/lepikhinb.jpg').default.src,
      },
    },
    {
      content:
        "顺风是我所从事的任何项目中最容易和最简单的部分。我无法想象没有它我能造出什么大的东西。",
      url: 'https://twitter.com/assertchris/status/1468651427664908292',
      author: {
        name: 'Christopher Pitt',
        role: 'Developer',
        avatar: require('@/img/avatars/assertchris.png').default.src,
      },
    },
    {
      content:
        "顺风CSS缓解了许多我们已经习惯使用传统CSS的问题，这让你想知道如果没有它，你会如何开发网站。",
      url: 'https://twitter.com/ChaseGiunta/status/1468658689569665026',
      author: {
        name: 'Chase Giunta',
        role: 'Developer',
        avatar: require('@/img/avatars/ChaseGiunta.jpg').default.src,
      },
    },
    {
      content:
        '在使用过其他CSS框架后，我总是回到顺风CSS，因为它使我能够在项目中创建一致且易于使用的设计系统。多亏了顺风CSS，我只需要一杯咖啡就可以开始一个新项目。',
      url: 'https://twitter.com/zaku_dev/status/1468666521895325697',
      author: {
        name: 'Ivan Guzman',
        role: 'Software Engineer',
        avatar: require('@/img/avatars/zaku_dev.png').default.src,
      },
    },
    {
      content:
        '我已经使用顺风CSS很多年了，但它们似乎每年都在更新，给我们带来惊喜。它帮助我超级快速地建立网站，我再也不能回到无聊的旧CSS课程!',
      url: 'https://twitter.com/heychazza',
      author: {
        name: 'Charlie Joseph',
        role: 'Developer',
        avatar: require('@/img/avatars/heychazza.jpg').default.src,
      },
    },
    {
      content:
        '顺风CSS是一个用纯CSS实现的设计系统。它也是可配置的。它赋予开发者超能力。它允许他们用一个干净一致的UI开箱即用来构建网站。它可以很好地与任何web开发框架集成，因为它只是CSS!天才。',
      url: 'https://twitter.com/kahliltweets/status/1468654856617476097',
      author: {
        name: 'Kahlil Lechelt',
        role: 'JavaScript Developer',
        avatar: require('@/img/avatars/kahliltweets.jpg').default.src,
      },
    },
    {
      content:
        '通过使用它的前缀特性，从Bootstrap慢慢迁移到Tailwind是非常简单的。受益于它的功能，而不必花很多时间提前是惊人的!',
      url: 'https://twitter.com/MarcoSinghof/status/1468654001772244993',
      author: {
        name: 'Marco Singhof',
        role: 'Full-Stack Developer',
        avatar: require('@/img/avatars/MarcoSinghof.jpg').default.src,
      },
    },
    {
      content:
        '在遇到Tailwind之前，我并不习惯使用CSS。它易于使用的抽象与优秀的文档相结合，改变了游戏规则!',
      url: 'https://twitter.com/joostmeijles/status/1468650757876555778',
      author: {
        name: 'Joost Meijles',
        role: 'Head of Unplatform @avivasolutions',
        avatar: require('@/img/avatars/joostmeijles.jpg').default.src,
      },
    },
    {
      content:
        "顺风把执行设计从一件苦差事变成了一件乐事。你会再次爱上为网络而建的一切。",
      url: 'https://twitter.com/_swanson/status/1468653854199853057',
      author: {
        name: 'Matt Swanson',
        role: 'Developer',
        avatar: require('@/img/avatars/_swanson.jpg').default.src,
      },
    },
    {
      content:
        '顺风CSS可以帮助您摆脱抽象样式的复杂性。在你的HTML中拥有样式是很强大的，当使用像Tailwind UI这样的产品时，这一点变得更加明显。',
      url: 'https://twitter.com/silvenon/status/1468676092504551433',
      author: {
        name: 'Matija Marohnić',
        role: 'Front-End Developer',
        avatar: require('@/img/avatars/silvenon.jpg').default.src,
      },
    },
    {
      content:
        '如果说《Tailwind》就像打了类固醇的Tachyons，那么《Tailwind》的UI就像兰斯·阿姆斯特朗赢得环法自行车赛(7次)。当然，没有丑闻和耻辱。',
      url: 'https://twitter.com/hughdurkin/status/1468658970848079872',
      author: {
        name: 'Hugh Durkin',
        role: 'Developer',
        avatar: require('@/img/avatars/hughdurkin.jpg').default.src,
      },
    },
    {
      content:
        '在被其他被抛弃的CSS框架折磨之后，我最大的恐惧是押注于另一个可能消失的框架。然而，我试了一下，再高兴不过了。他们定期以有意义的方式不断改进框架。感觉很有活力。',
      url: 'https://twitter.com/wolax/status/1468653118443470848',
      author: {
        name: 'Matthias Schmidt',
        role: 'Programmer',
        avatar: require('@/img/avatars/wolax.jpg').default.src,
      },
    },
    {
      content:
        '从我们整个开发团队获得顺风CSS的支持需要一些时间和讨论，但是一旦我们在公司范围内实施，它使任何开发人员都可以轻松地进入任何项目并快速进行更改/增强。',
      url: 'https://twitter.com/jerredchurst/status/1468657838494998530',
      author: {
        name: 'Jerred Hurst',
        role: 'CTO Primitive',
        avatar: require('@/img/avatars/jerredchurst.jpg').default.src,
      },
    },
    {
      content:
        "顺风CSS同时也让CSS变得有趣，并彻底改变了我构建产品的方式。它快速、高效，使用起来绝对是一种乐趣。",
      url: 'https://twitter.com/braunshizzle/status/1468676003941830666',
      author: {
        name: 'Braunson Yager',
        role: 'Full Stack Developer & Designer',
        avatar: require('@/img/avatars/braunshizzle.jpg').default.src,
      },
    },
    {
      content:
        '在这一点上，使用除Tailwind之外的任何CSS框架似乎都是web开发的倒退。在开发设计阶段，没有什么比《Tailwind》更能让我提高效率了。',
      url: 'https://twitter.com/zac_zajdel/status/1468662057079914499',
      author: {
        name: 'Zac Jordan Zajdel',
        role: 'Developer',
        avatar: require('@/img/avatars/zac_zajdel.jpg').default.src,
      },
    },
    {
      content:
        '顺风已经彻底改变了我们的开发管道。无论使用什么框架，CLI都能始终工作。',
      url: 'https://twitter.com/joelvarty/status/1468671752356126728',
      author: {
        name: 'Joel Varty',
        role: 'President & CTO @agilitycms',
        avatar: require('@/img/avatars/joelvarty.jpg').default.src,
      },
    },
    {
      content:
        '顺风就像一双漂亮的袜子。你会想"一双袜子能有多好"然后你穿上袜子，你就像`%@#!`这些是袜子。”',
      url: 'https://twitter.com/NeilDocherty/status/1468668979698937859',
      author: {
        name: 'Neil Docherty',
        role: 'Software Engineer',
        avatar: require('@/img/avatars/NeilDocherty.jpg').default.src,
      },
    },
    {
      content:
        '与其他方法相比，顺风将我们的css工作统一到不同的客户项目中，同时让我们保持定制的设计，甚至提高了我们网站的性能和稳定性。',
      url: 'https://twitter.com/skttl/status/1468669231864725514',
      author: {
        name: 'Søren Kottal',
        role: 'Developer',
        avatar: require('@/img/avatars/skttl.jpg').default.src,
      },
    },
    {
      content: '顺风是大规模使用CSS的唯一方法。',
      url: 'https://twitter.com/aarondfrancis/status/1468696321607544840',
      author: {
        name: 'Aaron Francis',
        role: 'Developer',
        avatar: require('@/img/avatars/aarondfrancis.jpg').default.src,
      },
    },
    {
      content:
        "顺风CSS已经成为我们团队开发工作流程中最大、最具影响力的变化。我很高兴我生活在一个顺风存在的世界里。",
      url: 'https://twitter.com/Megasanjay/status/1468674483099557890',
      author: {
        name: 'Sanjay Soundarajan',
        role: 'Front-End Developer',
        avatar: require('@/img/avatars/Megasanjay.jpg').default.src,
      },
    },
    {
      content:
        '顺风以一种优雅的方式解决了一个复杂的问题。它提供了一个随时可用的UI，同时不影响开发人员快速构建任何可以想象的东西。',
      url: 'https://twitter.com/brentgarner/status/1468676369143926789',
      author: {
        name: 'Brent Garner',
        role: 'Developer',
        avatar: require('@/img/avatars/brentgarner.jpg').default.src,
      },
    },
  ],
  // Column 3
  [
    {
      content: '直接跳到最后。使用@tailwindcss。',
      url: 'https://twitter.com/kentcdodds/status/1468692023158796289',
      author: {
        name: 'Kent C. Dodds',
        role: 'Developer and Educator',
        avatar: require('@/img/avatars/kentcdodds.jpg').default.src,
      },
    },
    {
      content:
        '我不擅长前端，直到我发现了顺风CSS。在我开始与Tailwind合作后，我学到了很多关于设计和CSS本身的知识。现在创建网页的速度快了5倍。',
      url: 'https://twitter.com/shrutibalasa',
      author: {
        name: 'Shruti Balasa',
        role: 'Full Stack Web Developer & Tech Educator',
        avatar: require('@/img/avatars/shrutibalasa.jpg').default.src,
      },
    },
    {
      content: "我不用它，但如果我要用的话，我会用Tailwind!",
      url: 'https://twitter.com/levelsio/status/1288542608390856705',
      author: {
        name: 'Pieter Levels',
        role: 'Maker',
        avatar: require('@/img/avatars/levelsio.jpg').default.src,
      },
    },
    {
      content:
        '有了顺风，我可以为我的客户提供更快的自定义WordPress主题的周转时间，无论是初始构建还是未来的修订。',
      url: 'https://twitter.com/gregsvn/status/1468667690042617857',
      author: {
        name: 'Greg Sullivan',
        role: 'WordPress Developer',
        avatar: require('@/img/avatars/gregsvn.jpg').default.src,
      },
    },
    {
      content: '感谢@tailwindcss, CSS开始对我有意义。',
      url: 'https://twitter.com/enunomaduro/status/1468650695104647170',
      author: {
        name: 'Nuno Maduro',
        role: 'Core Team Member @laravelphp',
        avatar: require('@/img/avatars/enunomaduro.jpg').default.src,
      },
    },
    {
      content:
        "顺风几乎立刻为我打开了。我无法想象自己会再写一个BEM类。自第一次公开发布以来，祝用户快乐!多亏了@tailwindcss，生产力达到了历史最高水平。",
      url: 'https://twitter.com/igor_randj/status/1468654576576380930',
      author: {
        name: 'Igor Randjelovic',
        role: 'Developer',
        avatar: require('@/img/avatars/igor_randj.jpg').default.src,
      },
    },
    {
      content:
        'CSS一直是提供数字服务最困难的部分。这让我觉得自己是个糟糕的开发者。顺风给了我对web开发的信心。他们的医生是我的第一站。',
      url: 'https://twitter.com/ohhdanm/status/1468653056988528643',
      author: {
        name: 'Dan Malone',
        role: 'Founder of @mawla_io',
        avatar: require('@/img/avatars/ohhdanm.jpg').default.src,
      },
    },
    {
      content:
        '我想`为什么我需要顺风CSS?`我已经知道CSS和使用Bootstrap”，但在尝试之后，我决定把我所有的项目都换成Tailwind。',
      url: 'https://twitter.com/sertxudev/status/1468660429715030019',
      author: {
        name: 'Sergio Peris',
        role: 'DevOps Engineer & Network Administrator',
        avatar: require('@/img/avatars/sertxudev.jpg').default.src,
      },
    },
    {
      content:
        '顺风文件是它真正的魔力。它实际上比CSS本身有更好的文档记录。使用它是一种乐趣。',
      url: 'https://twitter.com/zachknicker/status/1468662554658443264',
      author: {
        name: 'Zach Knickerbocker',
        role: 'Developer',
        avatar: require('@/img/avatars/zachknicker.jpg').default.src,
      },
    },
    {
      content:
        "当我使用顺风CSS时，我从来没有像现在这样自信地设计和样式化网站和web应用程序。",
      url: 'https://twitter.com/grossmeyer/status/1468671286415089666',
      author: {
        name: 'Glenn Meyer',
        role: 'Developer',
        avatar: require('@/img/avatars/grossmeyer.jpg').default.src,
      },
    },
    {
      content:
        '试过一次，永不回头。顺风车从0.7版开始转换，并且变得越来越好。',
      url: 'https://twitter.com/Jan_DHollander/status/1468653579405770754',
      author: {
        name: "Jan D'Hollander",
        role: 'Front-End Developer',
        avatar: require('@/img/avatars/Jan_DHollander.jpg').default.src,
      },
    },
    {
      content:
        '如果你在一家机构工作，处理数百个独特的网站，每个网站都有自己的自定义CSS，这是一场噩梦。帮你未来的自己一个忙，使用顺风吧!',
      url: 'https://twitter.com/waunakeesoccer1/status/1468736369757466625',
      author: {
        name: 'Andrew Brown',
        avatar: require('@/img/avatars/waunakeesoccer1.jpg').default.src,
      },
    },
    {
      content:
        '在顺风CSS出现之前，我一直在努力弄明白我的CSS面条。现在我很懊恼，为什么不早点试一试。我头疼，墙上有个大洞。但至少使用CSS是愉快的!',
      url: 'https://twitter.com/marckohlbrugge/status/1468731283400536071',
      author: {
        name: 'Marc Köhlbrugge',
        avatar: require('@/img/avatars/marckohlbrugge.jpg').default.src,
      },
    },
    {
      content:
        '一开始我是持怀疑态度的，并且抵制了很长一段时间，但是在今年用顺风CSS做了第一个项目之后，普通的CSS只是感觉错误和缓慢。',
      url: 'https://twitter.com/davidhellmann/status/1468703979232272398',
      author: {
        name: 'David Hellmann',
        role: 'Digital Designer & Developer',
        avatar: require('@/img/avatars/davidhellmann.jpg').default.src,
      },
    },
    {
      content:
        "在第一次使用Tailwind之后，我想知道我为什么要使用其他东西。它现在是我用于任何应用程序、产品或原型的首选CSS框架。",
      url: 'https://twitter.com/all_about_code/status/1468651643210240000',
      author: {
        name: 'Joshua Lowe',
        role: 'Developer',
        avatar: require('@/img/avatars/all_about_code.jpg').default.src,
      },
    },
    {
      content:
        '顺风不仅使我能够专注于构建出色的UI，而且当我需要手写CSS时，它还通过有这样一个很棒的文档站点提高了我的整体CSS技能。',
      url: 'https://twitter.com/joshmanders/status/1468710484396359681',
      author: {
        name: 'Josh Manders',
        role: 'Developer',
        avatar: require('@/img/avatars/joshmanders.jpg').default.src,
      },
    },
    {
      content:
        '使用顺风是快速原型设计系统的催化剂。强大的文档，有用的社区，和即时的结果。',
      url: 'https://twitter.com/igaenssley/status/1468674047328370690',
      author: {
        name: 'Ian Gaenssley',
        role: 'Design Operations Lead at BetterCloud',
        avatar: require('@/img/avatars/igaenssley.jpg').default.src,
      },
    },
    {
      content:
        '我本能地讨厌实用CSS，但是Tailwind完全改变了我。它重新点燃了我对前端开发和实现定制设计的热情!',
      url: 'https://twitter.com/jessarchercodes/status/1468743738545434626',
      author: {
        name: 'Jess Archer',
        role: 'Full-Stack Developer',
        avatar: require('@/img/avatars/jessarchercodes.png').default.src,
      },
    },
    {
      content:
        '顺风CSS比其他任何东西都更能弥合设计和开发之间的鸿沟。它将上下文重新引入到开发中，通过选择架构限制认知负荷，授予对开箱即用的令牌库的访问权，并且非常容易获取。这对我的设计生涯帮助很大。',
      url: 'https://twitter.com/CoreyGinnivan/status/1468698985435041794',
      author: {
        name: 'Corey Ginnivan',
        role: 'Co-Founder of FeatureBoard',
        avatar: require('@/img/avatars/CoreyGinnivan.jpg').default.src,
      },
    },
    {
      content:
        "当我在一个没有使用tailwindcss的项目上工作时，首先我会大喊大叫，然后深呼吸，然后运行npm install tailwindcss。",
      url: 'https://twitter.com/ryanchenkie/status/1468675898559840263',
      author: {
        name: 'Ryan Chenkie',
        avatar: require('@/img/avatars/ryanchenkie.jpg').default.src,
      },
    },
    {
      content:
        "回到一个没有使用Tailwind的大型网站，就像从特斯拉(Tesla)里跳出来，进入我父亲那辆生锈的明尼苏达农用卡车。当然，它能用，但离合器在打滑，刹车几乎不起作用，而且里面装的都是我们不再用的旧轮胎。",
      url: 'https://twitter.com/dangayle/status/1468738215431467008',
      author: {
        name: 'Dan Gayle',
        role: 'Senior Front-End Developer @CrateandBarrel',
        avatar: require('@/img/avatars/dangayle.jpg').default.src,
      },
    },
    {
      content:
        '最初，由于代码中的类数量太多，我极力拒绝提及Tailwind，但在使用它的5分钟内，我就被它迷住了，现在我成了那个向任何愿意听的人推销Tailwind的讨厌家伙。它简化了我的开发工作流程。',
      url: 'https://twitter.com/dbrooking/status/1468718511040126982',
      author: {
        name: 'Dan Brooking',
        role: 'Head Engineer @SubscriptionBox',
        avatar: require('@/img/avatars/dbrooking.jpg').default.src,
      },
    },
    {
      content:
        '我从来没有费心去学习普通的CSS，因为这是浪费时间——当我有顺风的时候，为什么还要费心去学习呢?事实证明，通过使用Tailwind，我学到了大量的CSS。这是一个完美的中间地带，介于深思熟虑的抽象之间，同时又让你自由。',
      url: 'https://twitter.com/TrevorCampbell_/status/1468739918662930432',
      author: {
        name: 'Trevor Campbell',
        avatar: require('@/img/avatars/TrevorCampbell_.jpg').default.src,
      },
    },
    {
      content:
        "顺风和它周围的生态系统就像一个巨大的涡轮增压器。它帮助开发人员和设计人员团队开发一种共享的语言和约束系统，从而加快整个过程。这将改变高效团队合作的游戏规则。",
      url: 'https://twitter.com/sagalbot/status/1468727120218103809',
      author: {
        name: 'Jeff Sagal',
        role: 'Full-Stack Developer',
        avatar: require('@/img/avatars/sagalbot.jpg').default.src,
      },
    },
    {
      content:
        '顺风提供了定制设计的风格，设计系统的约束，以及使其无限定制的灵活性，而不是让每个网站看起来都像是从同一块布上剪下来的。',
      url: 'https://twitter.com/michaeldyrynda/status/1468720374657392645',
      author: {
        name: 'Michael Dyrynda',
        role: 'Australian',
        avatar: require('@/img/avatars/michaeldyrynda.jpg').default.src,
      },
    },
    {
      content:
        '顺风完全改变了我的自由职业生涯，它允许我在不编写任何CSS的情况下快速构建完全自定义的设计。',
      url: 'https://twitter.com/jasonlbeggs/status/1468666464911736835',
      author: {
        name: 'Jason Beggs',
        role: 'Front-End Developer',
        avatar: require('@/img/avatars/jasonlbeggs.jpg').default.src,
      },
    },
    {
      content: '使用顺风CSS会让你觉得你刚刚解锁了一个作弊码。',
      url: 'https://twitter.com/dpaluy/status/1468678245327454211',
      author: {
        name: 'David Paluy',
        role: 'CTO @Quartix',
        avatar: require('@/img/avatars/dpaluy.png').default.src,
      },
    },
    {
      content:
        '我说服的所有开发者都愿意尝试《Tailwind》，并表示他们再也不会回头了。每一个。单身。一个。',
      url: 'https://twitter.com/jacobgraf/status/1468931374245687298',
      author: {
        name: 'Jacob Graf',
        role: 'Web Developer',
        avatar: require('@/img/avatars/jacobgraf.jpg').default.src,
      },
    },
  ],
]

function Testimonial({ author, content, url, expanded }) {
  let [focusable, setFocusable] = useState(true)
  let ref = useRef()

  useEffect(() => {
    if (ref.current.offsetTop !== 0) {
      setFocusable(false)
    }
  }, [])

  return (
    <li ref={ref} className="text-sm leading-6">
      <figure className="relative flex flex-col-reverse bg-slate-50 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5">
        <blockquote className="mt-6 text-slate-700 dark:text-slate-300">
          {typeof content === 'string' ? <p>{content}</p> : content}
        </blockquote>
        <figcaption className="flex items-center space-x-4">
          <img
            src={author.avatar}
            alt=""
            className="flex-none w-14 h-14 rounded-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="flex-auto">
            <div className="text-base text-slate-900 font-semibold dark:text-slate-300">
              {url ? (
                <a href={url} tabIndex={focusable || expanded ? 0 : -1}>
                  <span className="absolute inset-0" />
                  {author.name}
                </a>
              ) : (
                author.name
              )}
            </div>
            <div className="mt-0.5">{author.role}</div>
          </div>
        </figcaption>
      </figure>
    </li>
  )
}

export function Testimonials() {
  let ref = useRef()
  let [expanded, setExpanded] = useState(false)
  let [showCollapseButton, setShowCollapseButton] = useState(false)
  let [transition, setTransition] = useState(false)
  let { ref: inViewRef, inView } = useInView({ threshold: 0 })
  let initial = useRef(true)

  useIsomorphicLayoutEffect(() => {
    if (initial.current) {
      initial.current = false
      return
    }
    if (expanded) {
      ref.current.focus({ preventScroll: expanded })
    } else {
      ref.current.focus()
      ref.current.scrollIntoView()
    }
    if (expanded) {
      setShowCollapseButton(false)
    }
  }, [expanded])

  useEffect(() => {
    setTimeout(() => setTransition(expanded), 0)
  }, [expanded])

  useEffect(() => {
    if (!expanded || !inView) return
    function onScroll() {
      let bodyRect = document.body.getBoundingClientRect()
      let rect = ref.current.getBoundingClientRect()
      let middle = rect.top + rect.height / 4 - bodyRect.top - window.innerHeight / 2
      let isHalfWay = window.scrollY > middle
      if (showCollapseButton && !isHalfWay) {
        setShowCollapseButton(false)
      } else if (!showCollapseButton && isHalfWay) {
        setShowCollapseButton(true)
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll, { passive: true })
    }
  }, [expanded, showCollapseButton, inView])

  return (
    <section
      ref={ref}
      tabIndex="-1"
      className="relative max-w-7xl mx-auto px-4 focus:outline-none sm:px-3 md:px-5"
    >
      <h2 className="sr-only">Testimonials</h2>
      <div
        ref={inViewRef}
        className={clsx(
          'grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3',
          !expanded && 'max-h-[33rem] overflow-hidden'
        )}
      >
        {testimonials.map((column, i) => (
          <ul
            key={i}
            className={clsx(
              'space-y-8',
              i === 1 && 'hidden sm:block',
              i === 2 && 'hidden lg:block'
            )}
          >
            {column.map((testimonial) => (
              <Testimonial key={testimonial.author.name} expanded={expanded} {...testimonial} />
            ))}
          </ul>
        ))}
      </div>
      <div
        className={clsx(
          'inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-white pt-32 pb-8 pointer-events-none dark:from-slate-900',
          expanded ? 'sticky -mt-52' : 'absolute',
          transition && 'transition-opacity duration-300',
          expanded && (showCollapseButton ? 'opacity-100' : 'opacity-0')
        )}
      >
        <button
          type="button"
          className={clsx(
            'relative bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 text-sm text-white font-semibold h-12 px-6 rounded-lg flex items-center dark:bg-slate-700 dark:hover:bg-slate-600',
            transition && 'transition-transform',
            expanded && !showCollapseButton && 'translate-y-4',
            (!expanded || showCollapseButton) && 'pointer-events-auto'
          )}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? 'Okay, I get the point' : 'Show more...'}
        </button>
      </div>
    </section>
  )
}
