function toggleFaq(container) {
    var content = container.querySelector('.content_faq');
    var icon = container.querySelector('i');

    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        icon.classList.remove('fa-plus');
        icon.classList.add('fa-minus');
    } else {
        content.classList.add('hidden');
        icon.classList.remove('fa-minus');
        icon.classList.add('fa-plus');
    }
}