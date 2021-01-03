const defaultButtonsData = [
  {
    to: '/eaten-food',
    labelText: 'Eaten food',
    icon: ['fas', 'list'],
    key: 1,
  },
  {
    to: '/add-eaten-food',
    labelText: 'Add eaten food',
    icon: ['fas', 'utensils'],
    key: 2,
  },
  {
    to: '/home',
    labelText: 'Home',
    icon: ['fas', 'home'],
    key: 3,
  },
];

const buttonsData = {
  '/account-settings': defaultButtonsData,
  '/preferences': defaultButtonsData,
  '/statistics': defaultButtonsData,
  '/user-settings': defaultButtonsData,
  '/home': [
    {
      to: '/eaten-food',
      labelText: 'Eaten food',
      icon: ['fas', 'list'],
      key: 1,
    },
    {
      to: '/add-eaten-food',
      labelText: 'Add eaten food',
      icon: ['fas', 'utensils'],
      key: 2,
    },
    {
      to: '/menu',
      labelText: 'Settings',
      icon: ['fas', 'cog'],
      key: 3,
    },
  ],
  '/add-eaten-food': [
    {
      to: '/custom',
      labelText: 'Custom foods',
      icon: ['fas', 'folder-open'],
      key: 1,
    },
    {
      to: '/home',
      labelText: 'Home',
      icon: ['fas', 'home'],
      key: 2,
    },
    {
      to: '/menu',
      labelText: 'Settings',
      icon: ['fas', 'cog'],
      key: 3,
    },
  ],
  '/eaten-food': [
    {
      to: '/add-eaten-food',
      labelText: 'Add eaten food',
      icon: ['fas', 'utensils'],
      key: 1,
    },
    {
      to: '/home',
      labelText: 'Home',
      icon: ['fas', 'home'],
      key: 2,
    },
    {
      to: '/menu',
      labelText: 'Settings',
      icon: ['fas', 'cog'],
      key: 3,
    },
  ],
  '/custom': [
    {
      to: '/create-custom-food',
      labelText: 'Create custom food',
      icon: ['fas', 'folder-plus'],
      key: 1,
    },
    {
      to: '/home',
      labelText: 'Home',
      icon: ['fas', 'home'],
      key: 2,
    },
    {
      to: '/menu',
      labelText: 'Settings',
      icon: ['fas', 'cog'],
      key: 3,
    },
  ],
};

export default buttonsData;
