$('.owl-carousel').owlCarousel({
    loop: true,
    mobileFirst: true,
    margin: 4,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        400: {
            items: 3
        },
        900: {
            items: 5
        }
    }
})


/* POPUP - VIDEO - MOSTRAR E FECHAR */

function iniciaModal(modalID) {
    const modal = document.getElementById(modalID);
    modal.classList.add('mostrar');
    modal.addEventListener('click', function(e) {
        if (e.target.id == modalID || e.target.className == 'fechar') {
            modal.classList.remove('mostrar');
        }
    });
}

const assistir = document.querySelector('.filme-principal .assistir');
assistir.addEventListener('click', function() {
    iniciaModal('modal-promocao');
});

const downloader = document.querySelector('.filme-principal .downloader');
downloader.addEventListener('click', function() {
    alert("Obrigado por clicar Downloader indisponível");
});


//BOTÃO VOLTAR AO TOPO
$(window).scroll(function() {
    let position = $(this).scrollTop();

    if (position >= 718) {
        $('.voltar-topo').addClass('scrollTop');
    } else {
        $('.voltar-topo').removeClass('scrollTop');
    }
})