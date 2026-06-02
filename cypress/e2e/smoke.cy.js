describe('Smoke-тесты главной страницы', () => {
  beforeEach(() => {
    cy.visit('https://olya-myslin.github.io/iss-day/');
  });

  it('Главная страница загружается', () => {
    cy.get('#start-title').should('be.visible');
  });

  it('Заголовок содержит правильный текст', () => {
    cy.get('#start-title').should('contain', 'ОДИН ДЕНЬ');
  });

  it('Кнопка старта присутствует и кликабельна', () => {
    cy.get('#start-button')
      .should('be.visible')
      .and('contain', 'НАЧАТЬ ПЕРВЫЙ ДЕНЬ')
      .and('not.be.disabled');
  });

  it('3D-контейнер МКС существует на странице', () => {
    cy.get('#iss-container').should('exist');
  });

  it('Фоновая музыка подключена', () => {
    cy.get('#bg-music')
      .should('exist')
      .and('have.attr', 'src', 'audio/music.mp3');
  });

  it('Игровые часы отображаются в формате UTC', () => {
    cy.get('.time').should('contain', 'UTC');
  });
});