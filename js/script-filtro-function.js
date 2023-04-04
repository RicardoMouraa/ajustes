document.addEventListener('DOMContentLoaded', function () {
  const dropdowns = document.querySelectorAll('.dropdown');
  const dropdownButtons = document.querySelectorAll('.dropdown-btn');
  const filterTagsContainer = document.createElement('div');
  filterTagsContainer.classList.add('filter-tags-container');
  document.querySelector('.filters').appendChild(filterTagsContainer);

  dropdownButtons.forEach((dropdownButton) => {
    dropdownButton.addEventListener('click', function () {
      this.parentElement.querySelector('.dropdown-content').classList.toggle('open');
    });
  });

  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener('mouseleave', function () {
      this.querySelector('.dropdown-content').classList.remove('open');
    });

    dropdown.querySelectorAll('.dropdown-content a').forEach((filterOption) => {
      filterOption.addEventListener('click', function (e) {
        e.preventDefault();
        const filterName = this.dataset.filterName;
        const filterValue = this.dataset.filterValue;
        const btn = this.closest('.dropdown').querySelector('.dropdown-btn');

        if (filterValue === '') {
          delete btn.dataset.filterValue;
          btn.textContent = btn.dataset.defaultText;
        } else {
          btn.dataset.filterValue = filterValue;
        }

        filterTagsContainer.innerHTML = '';
        dropdownButtons.forEach((dropdownButton) => {
          const selectedValue = dropdownButton.dataset.filterValue;
          if (selectedValue) {
            const filterTag = document.createElement('span');
            filterTag.classList.add('filter-tag');
            filterTag.dataset.filterName = dropdownButton.dataset.filterName;
            filterTag.textContent = selectedValue;
            filterTagsContainer.appendChild(filterTag);
          }
        });
      });
    });
  });

  document.getElementById('btn-limpar').addEventListener('click', function () {
    dropdownButtons.forEach((dropdownButton) => {
      dropdownButton.textContent = dropdownButton.dataset.defaultText;
      delete dropdownButton.dataset.filterValue;
    });

    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
      card.style.display = 'block';
    });

    filterTagsContainer.innerHTML = '';
  });

  document.getElementById('btn-buscar').addEventListener('click', function () {
    const cards = document.querySelectorAll('.card');
    const selectedFilters = {};

    dropdownButtons.forEach((dropdownButton) => {
      if (dropdownButton.dataset.filterValue) {
        selectedFilters[dropdownButton.dataset.filterName] = dropdownButton.dataset.filterValue;
      }
    });

    cards.forEach((card) => {
      let shouldDisplay = true;

      for (const filterName in selectedFilters) {
        const filterValue = selectedFilters[filterName];

        if (filterName === 'inicial') {
          const cardTitle = card.querySelector('.title').textContent.trim().charAt(0).toUpperCase();
          if (cardTitle !== filterValue) {
            shouldDisplay = false;
            break;
          }
        } else if (card.dataset[filterName] !== filterValue) {
          shouldDisplay = false;
          break;
        }
      }

      card.style.display = shouldDisplay ? 'block' : 'none';
    });
  });

    // Adicionar funcionalidade para o filtro de inicial
    document.querySelectorAll('.dropdown-content.alfabeto a').forEach((initialOption) => {
      initialOption.addEventListener('click', function (e) {
        e.preventDefault();
        const btn = document.querySelector('.dropdown-btn[data-default-text="Inicial"]');
        // Remover a linha que altera o texto do botão do dropdown
        // btn.textContent = this.textContent;
        btn.dataset.filterName = 'inicial';
        btn.dataset.filterValue = this.textContent;
  
        filterTagsContainer.innerHTML = '';
        dropdownButtons.forEach((dropdownButton) => {
          const selectedValue = dropdownButton.dataset.filterValue;
          if (selectedValue) {
            const filterTag = document.createElement('span');
            filterTag.classList.add('filter-tag');
            filterTag.dataset.filterName = dropdownButton.dataset.filterName;
            filterTag.textContent = selectedValue;
            filterTagsContainer.appendChild(filterTag);
          }
        });
      });
    });
  });