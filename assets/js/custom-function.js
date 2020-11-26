let currentSection_id = 1;
function toggleSection(section) {
    let currentSection = document.querySelector('[data-id = "' + currentSection_id + '"]')
    currentSection.classList.toggle('hidden');
    if (section == 0) {
        if (currentSection_id < 2) {
            section = currentSection_id + 1;
        } else {
            section = 2;
        }
    }
    if (currentSection !== section) {
        currentSection_id = section;
        currentSection = document.querySelector('[data-id = "' + section + '"]');
        currentSection.classList.toggle('hidden');
        document.getElementById('featured').scrollIntoView({
            behavior: 'smooth',
            block: 'end'
        });
    }
}

$('a').click(function () {
    const featuredSection = $(this)[0];
    document.getElementsByClassName('active')[0].classList.toggle('active')
    featuredSection.classList.toggle('active')
})
