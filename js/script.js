        // Seleciona os elementos
        const linkContato = document.querySelector('a[data-page="contatos"]');
        const secaoContato = document.querySelector('.contatos');
        const logoHome = document.querySelector('header h2');
        const linksHome = document.querySelectorAll('header ul li a:not([data-page="contatos"])');
        
        // Elementos que compõem a página inicial (Home)
        // Selecionamos tudo que deve sumir quando o contato aparecer
        const elementosHome = document.querySelectorAll('.hero, .down-text, .meio, .projects, .clear');

        function abrirContato(event) {
            event.preventDefault(); // Evita o comportamento padrão do link
            
            // Esconde elementos da home
            elementosHome.forEach(el => el.style.display = 'none');
            
            // Mostra a seção de contato
            secaoContato.style.display = 'block';
        }

        function abrirHome() {
            // Esconde contato
            secaoContato.style.display = 'none';
            
            // Mostra elementos da home (remove o display: none inline para voltar ao CSS original)
            elementosHome.forEach(el => el.style.display = '');
        }

        // Adiciona os eventos de clique
        linkContato.addEventListener('click', abrirContato);
        logoHome.addEventListener('click', abrirHome);
        linksHome.forEach(link => link.addEventListener('click', abrirHome));