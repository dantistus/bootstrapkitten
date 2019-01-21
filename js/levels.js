var levels = [
  {
    name: 'align-content 4',
    instructions: {
      'en': '<p>Bring the frogs home one last time by using the CSS properties you\'ve learned:</p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code><img src="https://code.org/api/hour/finish_flexbox_froggy.png"></li></ul>',
      'ru': '<p>Доставь лягушат по домам в последний раз, используя CSS свойства, которые ты выучил:</p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code></li></ul>',
      'cs': '<p>Ještě jednou pomozte žabkám najít své lekníny CSS vlastnostmi, které jste se naučili:</p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code></li></ul>',
      'uk': '<p>Востаннє відправ жабенят додому використавши CSS-властивості, які ти вивчив:</p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code></li></ul>',
    },
    board: 'rggggyy',
    style: {'flex-direction': 'column-reverse', 'flex-wrap': 'wrap-reverse', 'align-content': 'space-between', 'justify-content': 'center'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  }
];

var levelWin = {
  name: 'win',
  instructions: {
    'en': '<p>You win! Thanks to your mastery of flexbox, you were able to help all of the frogs to their lilypads. Just look how hoppy they are!</p><p>If you found this ribbeting, be sure to visit <a href="http://cssgridgarden.com/">Grid Garden</a> to learn about another powerful new feature of CSS layout. You can also check out my other projects on <a href="http://thomaspark.co">my blog</a> or <a href="http://twitter.com/thomashpark">Twitter</a>.</p><p>Want to keep learning while supporting Flexbox Froggy? Try out the topnotch web design and coding courses offered by <a href="http://treehouse.7eer.net/c/371033/228915/3944?subId1=flexboxfroggy">Treehouse</a>. And be sure to share Flexbox Froggy with your friends!</p>',
    'ru': '<p>Ты выиграл! Благодарим тебя за мастерство flexbox, ты смог помочь всем лягушатам добраться до их лилий. Просто взгляни, как они счастливы!</p><p>Если тебе понравилось, зацени мои другие проекты в моем <a href="http://thomaspark.co">блоге</a> или <a href="http://twitter.com/thomashpark">твитере</a>, и не забудь поделиться этой игрой со своими друзьями!</p>',
    'cs': '<p>Vyhráli jste! Svým mistrovským použitím flexboxu jste pomohli všem žabkám najít své lekníny. Podívejte, jak jsou šťastné!</p><p>Jestli se vám hra líbila, podívejte se i na mé další projekty na mém <a href="http://thomaspark.co">blogu</a> nebo na <a href="http://twitter.com/thomashpark">Twitteru</a>, a podělte se o radost z Flexbox Froggy s kamarády!</p>',
    'uk': '<p>Ти виграв! Завдяки твоїй майстерності з flexbox, ти зміг допомогти всім жабенятам дістатися до їх листів латаття. Лиш подивись які вони щасливі!</p><p>Якщо ця гра тобі сподобалась, переглянь мої інші проекти у <a href="http://thomaspark.co">блозі</a> або <a href="http://twitter.com/thomashpark">Твітері</a>, й не забудь поділитися грою Flexbox Froggy зі своїми друзями!</p>',
  },
  board: 'gyrgyrgyrgyrgyrgyrgyrgyrg',
  classes: {'#pond, #background': 'wrap'},
  style: {},
  before: "#pond {\n  display: flex;\n",
  after: "}"
};
