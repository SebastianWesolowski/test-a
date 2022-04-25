module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: 'select',
        name: 'category',
        message: 'Which type component?',
        choices: ['component', 'layout', 'pages', 'layout', 'utils'],
      },
      {
        type: 'input',
        name: 'component_name',
        message: 'What is the component name?',
      },
    ];
    return inquirer.prompt(questions).then((answers) => {
      // const normalize = (string) => {
      //   const prefix = 's';
      //   const _string = string.split('');

      //   if (string.length === 1 || _string[0].toLowerCase() !== 's') {
      //     _string.unshift(prefix);
      //     console.log('Component name added prefix:', prefix);
      //   }

      //   _string[0] = _string[0].toUpperCase();
      //   _string[1] = _string[1].toUpperCase();
      //   return _string.join('');
      // };

      answers.component_name = answers.component_name.charAt(0).toUpperCase() + answers.component_name.slice(1);

      const { category, component_name } = answers;

      const path = `${category}/${component_name}`;
      const absPath = `src/${path}`;
      return { ...answers, path, absPath, category };
    });
  },
};
