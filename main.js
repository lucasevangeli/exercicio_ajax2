$(document).ready(function() {
    $.ajax({
        url: 'https://api.github.com/users/lucasevangeli',
        dataType: 'json',
        success: function(data) {
            $('.profile-avatar').attr('src', data.avatar_url);
            $('.profile-name').text(data.name);
            $('.profile-username').text('@' + data.login);
            $('.numbers-item:eq(0)').text(data.public_repos);
            $('.numbers-item:eq(1)').text(data.followers);
            $('.numbers-item:eq(2)').text(data.following);
            $('.profile-link').attr('href', data.html_url);
        },
        error: function() {
            console.error('Erro ao carregar os dados do GitHub.');
        }
    });
});
