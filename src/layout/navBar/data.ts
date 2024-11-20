interface Page {
    name: string;
    url: string
}

export const pages: Page[] = [
    {
    name: 'Gráficos',
    url: '/dashboard'
  },
  {
    name: 'Cargar',
    url: '/upload'
  },
  {
    name: 'Usuarios',
    url: '/users'
  }
  ];