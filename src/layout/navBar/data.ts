interface Page {
    name: string;
    url: string;
    permissions: string[]
}

export const pages: Page[] = [
    {
    name: 'Gráficos',
    url: '/dashboard',
    permissions: ['client', 'admin', 'superAdmin']
  },
  {
    name: 'Cargar',
    url: '/upload',
    permissions: ['admin', 'superAdmin']
  },
  {
    name: 'Usuarios',
    url: '/users',
    permissions: ['superAdmin']
  }
  ];