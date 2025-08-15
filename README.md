# Isaque Weber - Portfolio

Portfolio profissional desenvolvido com React + TypeScript + TailwindCSS, apresentando um design moderno com animações avançadas e suporte completo ao modo escuro.

## 🚀 Tecnologias Utilizadas

- **Frontend:** React 18, TypeScript
- **Styling:** TailwindCSS com modo escuro
- **Animações:** Framer Motion
- **Formulários:** React Hook Form
- **Icons:** Lucide React
- **Build Tool:** Next.js
- **Email Service:** EmailJS (configurável)

## ✨ Funcionalidades

- ✅ Design responsivo (mobile-first)
- ✅ Modo escuro com persistência
- ✅ Animações fluídas e interativas
- ✅ Formulário de contato com validação
- ✅ Navegação suave entre seções
- ✅ Performance otimizada
- ✅ SEO otimizado
- ✅ Acessibilidade (ARIA)
- ✅ TypeScript com tipagem forte

## 🏗️ Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── Header.tsx      # Cabeçalho com navegação
│   ├── Hero.tsx        # Seção principal
│   ├── About.tsx       # Sobre mim
│   ├── Skills.tsx      # Habilidades técnicas
│   ├── Projects.tsx    # Portfólio de projetos
│   ├── Contact.tsx     # Formulário de contato
│   └── Footer.tsx      # Rodapé
├── data/               # Dados do portfólio
│   └── portfolio.ts    # Informações pessoais e projetos
├── hooks/              # Custom hooks
│   └── useTheme.ts     # Gerenciamento do tema
├── types/              # Definições TypeScript
│   └── index.ts        # Interfaces e types
├── assets/             # Recursos estáticos
├── App.tsx             # Componente principal
├── main.tsx            # Ponto de entrada
└── index.css           # Estilos globais
```

## 🛠️ Instalação e Desenvolvimento

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/isaque-weber/portfolio.git
cd portfolio

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

### Scripts Disponíveis

```bash
npm run dev      # Servidor de desenvolvimento
npm run build    # Build de produção
npm run start    # Servidor de produção
npm run lint     # Verificação de código
```

## 🚀 Deploy

### Vercel (Recomendado)

1. Faça login na [Vercel](https://vercel.com)
2. Conecte seu repositório GitHub
3. Configure as variáveis de ambiente (se necessário)
4. Deploy automático a cada push

### Netlify

1. Faça login na [Netlify](https://netlify.com)
2. Conecte seu repositório
3. Configure build command: `npm run build`
4. Configure publish directory: `out`

### Configuração do EmailJS (Opcional)

Para o formulário de contato funcionar com EmailJS:

1. Crie uma conta em [EmailJS](https://emailjs.com)
2. Configure um serviço de email
3. Adicione as variáveis de ambiente:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

## 🎨 Personalização

### Dados Pessoais

Edite o arquivo `src/data/portfolio.ts` com suas informações:

```typescript
export const personalInfo = {
  name: 'Seu Nome',
  title: 'Seu Título',
  description: 'Sua descrição',
  // ...
};
```

### Cores e Tema

Personalize as cores no `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Suas cores personalizadas
      }
    }
  }
}
```

## 📱 Responsividade

O projeto foi desenvolvido com abordagem mobile-first e é totalmente responsivo:

- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1280px+)

## ⚡ Performance

- Lazy loading de componentes
- Otimização de imagens
- Code splitting automático
- Preload de fonts críticas
- Minificação e compressão

## 🔧 Tecnologias de Desenvolvimento

- **ESLint:** Análise de código
- **TypeScript:** Tipagem estática
- **PostCSS:** Processamento de CSS
- **Autoprefixer:** Compatibilidade de CSS

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## 📧 Contato

- **Email:** isaque.weber5@gmail.com
- **LinkedIn:** [linkedin.com/in/isaque-weber](https://linkedin.com/in/isaque-weber)
- **GitHub:** [github.com/isaque-weber](https://github.com/isaque-weber)

---

Desenvolvido com ❤️ por Isaque Weber