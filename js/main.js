let categories = [
    {
        title: 'Все',
    },
    {
        title: 'Общение',
        items: [],
        isActive: true,
        seo: {
            seoTitle: 'salom',
            seoKeywords: [],
            seoDescription: 'Description',
            seoText: 'text'

        }
    },
    {
        title: 'Личные блоги',
        items: [],
        isActive: true,
        seo: {
            seoTitle: 'salom',
            seoKeywords: [],
            seoDescription: 'Description',
            seoText: 'text'

        }
    },
    {
        title: 'Всякое',
        items: [],
        isActive: true,
        seo: {
            seoTitle: 'salom',
            seoKeywords: [],
            seoDescription: 'Description',
            seoText: 'text'

        }
    }
]
let date = new Date()
let day = date.getDate()
let month = date.getMonth()

if (day < 10) {
    day = '0' + day
}
if (month < 10) {
    month = '0' + month
}

let users = [
    {
        id: 1,
        userName: 'Hamillioner',
        who: 'performer'
    },
    {
        id: 2,
        userName: 'furqatniyazov',
        who: 'performer'
    },
    {
        id: 3,
        userName: 'username3',
        who: 'performer'
    },
    {
        id: 4,
        userName: 'username4',
        who: 'performer'
    },
    {
        id: 5,
        userName: 'username5',
        who: 'performer'
    },
    {
        id: 6,
        userName: 'username6',
        who: 'performer'
    },
    {
        id: 7,
        userName: 'username7',
        who: 'performer'
    }
]

let posts = [
    {
        id: 0,
        title: 'Введение поддержки IPv6 в 3 компании',
        text: 'Здравствуйте! Добро пожаловать!',
        category: categories[1],
        created: (day + '.' + month + '.' + date.getFullYear()),
        commentAllowed: true,
        comments: [],
        isActive: true,
        type: 'blog'
    },
    {
        id: 1,
        title: 'Интервью c Григорием Корниловым (Kaspersky Lab)',
        text: 'Здравствуйте! Добро пожаловать!',
        category: categories[3],
        created: (day + '.' + month + '.' + date.getFullYear()),
        commentAllowed: true,
        comments: [],
        isActive: true,
        type: 'news'
    },
    {
        id: 2,
        title: 'Анализ HTTP-трафика с Mitmproxy',
        text: 'Здравствуйте! Добро пожаловать!',
        category: categories[1],
        created: (day + '.' + month + '.' + date.getFullYear()),
        commentAllowed: true,
        comments: [],
        isActive: true,
        type: 'blog'
    },
    {
        id: 3,
        title: 'Введение поддержки IPv6 в 3 компании',
        text: 'Здравствуйте! Добро пожаловать!',
        category: categories[2],
        created: (day + '.' + month + '.' + date.getFullYear()),
        commentAllowed: true,
        comments: [],
        isActive: true,
        type: 'news'
    }
]
let comments = [
    {
        id: 1,
        created: (day + '.' + month + '.' + date.getFullYear()),
        link: 'https://letcop.com/link',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae natus aperiam delectus tempora rerum atque ipsum error, accusamus quis nulla deserunt libero dolorum? Ipsa magni exercitationem hic harum eos atque!',
        post: posts[0],
        user: users[1],
        approved: false
    }, {
        id: 2,
        created: (day + '.' + month + '.' + date.getFullYear()),
        link: 'https://letcop.com/link',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae natus aperiam delectus tempora rerum atque ipsum error, accusamus quis nulla deserunt libero dolorum? Ipsa magni exercitationem hic harum eos atque!',
        post: posts[1],
        user: users[1],
        approved: false
    }, {
        id: 3,
        created: (day + '.' + month + '.' + date.getFullYear()),
        link: 'https://letcop.com/link',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae natus aperiam delectus tempora rerum atque ipsum error, accusamus quis nulla deserunt libero dolorum? Ipsa magni exercitationem hic harum eos atque!',
        post: posts[2],
        user: users[1],
        approved: false
    }, {
        id: 4,
        created: (day + '.' + month + '.' + date.getFullYear()),
        link: 'https://letcop.com/link',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae natus aperiam delectus tempora rerum atque ipsum error, accusamus quis nulla deserunt libero dolorum? Ipsa magni exercitationem hic harum eos atque!',
        post: posts[3],
        user: users[1],
        approved: false
    }, {
        id: 5,
        created: (day + '.' + month + '.' + date.getFullYear()),
        link: 'https://letcop.com/link',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae natus aperiam delectus tempora rerum atque ipsum error, accusamus quis nulla deserunt libero dolorum? Ipsa magni exercitationem hic harum eos atque!',
        post: posts[0],
        user: users[1],
        approved: false
    }, {
        id: 6,
        created: (day + '.' + month + '.' + date.getFullYear()),
        link: 'https://letcop.com/link',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae natus aperiam delectus tempora rerum atque ipsum error, accusamus quis nulla deserunt libero dolorum? Ipsa magni exercitationem hic harum eos atque!',
        post: posts[1],
        user: users[1],
        approved: false
    }, {
        id: 7,
        created: (day + '.' + month + '.' + date.getFullYear()),
        link: 'https://letcop.com/link',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae natus aperiam delectus tempora rerum atque ipsum error, accusamus quis nulla deserunt libero dolorum? Ipsa magni exercitationem hic harum eos atque!',
        post: posts[2],
        user: users[1],
        approved: false
    }, {
        id: 8,
        created: (day + '.' + month + '.' + date.getFullYear()),
        link: 'https://letcop.com/link',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae natus aperiam delectus tempora rerum atque ipsum error, accusamus quis nulla deserunt libero dolorum? Ipsa magni exercitationem hic harum eos atque!',
        post: posts[3],
        user: users[1],
        approved: false
    }, {
        id: 9,
        created: (day + '.' + month + '.' + date.getFullYear()),
        link: 'https://letcop.com/link',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae natus aperiam delectus tempora rerum atque ipsum error, accusamus quis nulla deserunt libero dolorum? Ipsa magni exercitationem hic harum eos atque!',
        post: posts[0],
        user: users[1],
        approved: false
    }, {
        id: 10,
        created: (day + '.' + month + '.' + date.getFullYear()),
        link: 'https://letcop.com/link',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae natus aperiam delectus tempora rerum atque ipsum error, accusamus quis nulla deserunt libero dolorum? Ipsa magni exercitationem hic harum eos atque!',
        post: posts[1],
        user: users[1],
        approved: false
    }, {
        id: 11,
        created: (day + '.' + month + '.' + date.getFullYear()),
        link: 'https://letcop.com/link',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae natus aperiam delectus tempora rerum atque ipsum error, accusamus quis nulla deserunt libero dolorum? Ipsa magni exercitationem hic harum eos atque!',
        post: posts[2],
        user: users[1],
        approved: false
    }, {
        id: 12,
        created: (day + '.' + month + '.' + date.getFullYear()),
        link: 'https://letcop.com/link',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae natus aperiam delectus tempora rerum atque ipsum error, accusamus quis nulla deserunt libero dolorum? Ipsa magni exercitationem hic harum eos atque!',
        post: posts[3],
        user: users[1],
        approved: false
    }, {
        id: 13,
        created: (day + '.' + month + '.' + date.getFullYear()),
        link: 'https://letcop.com/link',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae natus aperiam delectus tempora rerum atque ipsum error, accusamus quis nulla deserunt libero dolorum? Ipsa magni exercitationem hic harum eos atque!',
        post: posts[0],
        user: users[1],
        approved: false
    }, {
        id: 14,
        created: (day + '.' + month + '.' + date.getFullYear()),
        link: 'https://letcop.com/link',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae natus aperiam delectus tempora rerum atque ipsum error, accusamus quis nulla deserunt libero dolorum? Ipsa magni exercitationem hic harum eos atque!',
        post: posts[1],
        user: users[1],
        approved: false
    }, {
        id: 15,
        created: (day + '.' + month + '.' + date.getFullYear()),
        link: 'https://letcop.com/link',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae natus aperiam delectus tempora rerum atque ipsum error, accusamus quis nulla deserunt libero dolorum? Ipsa magni exercitationem hic harum eos atque!',
        post: posts[2],
        user: users[1],
        approved: false
    }, {
        id: 16,
        created: (day + '.' + month + '.' + date.getFullYear()),
        link: 'https://letcop.com/link',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae natus aperiam delectus tempora rerum atque ipsum error, accusamus quis nulla deserunt libero dolorum? Ipsa magni exercitationem hic harum eos atque!',
        post: posts[3],
        user: users[1],
        approved: false
    }
]

for (const comment of comments) {
    for (const post of posts) {
        if (comment.user.id == post.id) {
            post.comments.push(comment)
        }

    }

}

let invitePostToCategory = () => {
    for (const category of categories) {
        category.items = []
    }
    for (const post of posts) {
        for (const category of categories) {
            if (post.category.title == category.title) {
                category.items.push(post)
            }
        }
    }
}

invitePostToCategory()
let blogPostListTable = document.querySelector('.blog_posts__list_table')
let newsPostListTable = document.querySelector('.news_posts__list_table')

let blogPostRowTh = document.createElement('tr')
blogPostRowTh.innerHTML = `
<th class="post__list_id">ID</th>
<th class="post__list_title_th">Заголовок</th>
<th class="post__list_category">Категория</th>
<th class="post__list_date">Создан</th>
<th class="post__list_do">Действия</th>`

let newsPostRowTh = document.createElement('tr')
newsPostRowTh.innerHTML = `
<th class="post__list_id">ID</th>
<th class="post__list_title_th">Заголовок</th>
<th class="post__list_category">Категория</th>
<th class="post__list_date">Создан</th>
<th class="post__list_do">Действия</th>`

let categoriyListTable = document.querySelector('.categories__list_table')
let categoryRowTh = document.createElement('tr')

let categorySelect = document.createElement('select')
categorySelect.name = 'selectCategory'
categorySelect.id = 'selectCategory'
categorySelect.classList.add('sort__categories')
let categoryOptions = () => {
    categorySelect.innerHTML = ''
    for (const category of categories) {
        categorySelect.innerHTML += `<option value="${category.title}">${category.title}</option>`
    }
}
categoryOptions()
document.querySelector('.sort__search').appendChild(categorySelect)
categorySelect.setAttribute('onchange', 'postSearchByCategory(event)')


categoryRowTh.innerHTML = `
<th class="category__list_title_th">Заголовок</th>
<th class="category__list_posts">Посты</th>
<th class="category__list_do">Действия</th>`

let blogCommentsListTable = document.querySelector('.blog__comments_list_table')
let newsCommenstListTable = document.querySelector('.news__comments_list_table')


/* <!-- ==================show-hide()========================= --> */
let showHide = () => {
    document.querySelector('.hidden').classList.toggle('show')
    document.querySelector('.blogs_posts').classList.toggle('selected')

}

let showPosts = () => {
    for (var i = 1; i < document.querySelector('.block').children.length; i++) {
        document.querySelector('.block').children[i].setAttribute('style', 'display: none;')
    }
    document.querySelector('.posts').removeAttribute('style')
}

let showCategories = () => {
    for (var i = 1; i < document.querySelector('.block').children.length; i++) {
        document.querySelector('.block').children[i].setAttribute('style', 'display: none;')
    }
    document.querySelector('.categories').removeAttribute('style')
}

let showComments = () => {
    for (var i = 1; i < document.querySelector('.block').children.length; i++) {
        document.querySelector('.block').children[i].setAttribute('style', 'display: none;')
    }
    document.querySelector('.comments').removeAttribute('style')
}
/* <!-- ==================show-hide()========================= --> */

// ===========================Посты==============================================
let postNav = () => {
    let sortRadio = document.querySelectorAll('.post__nav_radio')
    for (const i in sortRadio) {
        if (sortRadio[i].checked) {
            postsNavItem = document.querySelectorAll('.posts__nav_item')
            for (const j of postsNavItem) {
                j.classList.remove('posts__nav_active')
            }
            postsNavItem[i].classList.add('posts__nav_active')
        }
    }
}

let editPostNav = () => {
    let sortRadio = document.querySelectorAll('.editPost__nav_radio')
    for (const i in sortRadio) {
        if (sortRadio[i].checked) {
            postsNavItem = document.querySelectorAll('.editPost__nav_item')
            for (const j of postsNavItem) {
                j.classList.remove('editPost__nav_active')
            }
            postsNavItem[i].classList.add('editPost__nav_active')
        }
    }
}

let postList = () => {
    blogPostListTable.innerHTML = ''
    blogPostListTable.appendChild(blogPostRowTh)

    newsPostListTable.innerHTML = ''
    newsPostListTable.appendChild(newsPostRowTh)

    let odd1 = 0
    let odd2 = 0

    for (const post of posts) {
        if (post.type == 'blog') {
            if (post.category != null) {
                let row = document.createElement('tr')
                row.id = post.id
                odd1++
                row.innerHTML +=
                    `
                        <td>${post.id}</td>
                        <td class="post__list_title"><a class='go_to_post' target='_blank' href='post${post.id}'><i class="fas fa-external-link-alt"></i></a> ${post.title}</td>
                        <td>${post.category.title}</td>
                        <td>${post.created}</td>
                        <td><i class="fas fa-edit" onclick='editPost(${posts.indexOf(post)})'></i> <i class="fas fa-trash-alt" onclick='postDelete(${post.id})'></i></td>
                    `
                blogPostListTable.appendChild(row)
                if (odd1 % 2 == 0) {
                    row.classList.add('odd')
                }
                else { row.classList.remove('odd') }
            }
        }

        else {
            if (post.category != null) {
                let row = document.createElement('tr')
                row.id = post.id
                odd2++
                row.innerHTML +=
                    `
                        <td>${post.id}</td>
                        <td class="post__list_title"><a class='go_to_post' target='_blank' href='post${post.id}'><i class="fas fa-external-link-alt"></i></a> ${post.title}</td>
                        <td>${post.category.title}</td>
                        <td>${post.created}</td>
                        <td><i class="fas fa-edit" onclick='editPost(${posts.indexOf(post)})'></i> <i class="fas fa-trash-alt" onclick='postDelete(${post.id})'></i></td>
                    `
                newsPostListTable.appendChild(row)
                if (odd2 % 2 == 0) {
                    row.classList.add('odd')
                }
                else { row.classList.remove('odd') }
            }
        }

    }
}

let postSearchById = (event) => {
    let searchByIdTitle = event.target.value
    if (searchByIdTitle != '') {

        if (document.querySelector('#BlogPostsCheckbox').checked) {
            blogPostListTable.innerHTML = ''

            blogPostListTable.appendChild(blogPostRowTh)
            for (const post of posts) {
                if (post.type == 'blog') {
                    if (post.title.toLowerCase().search(searchByIdTitle.toLowerCase()) != -1 || post.id.toString().search(searchByIdTitle.toString()) != -1) {

                        let row = document.createElement('tr')
                        row.innerHTML =
                            `
                            <td>${post.id}</td >
                    <td class="post__list_title"><a class='go_to_post' target='_blank' href='post${post.id}'><i class="fas fa-external-link-alt"></i></a> ${post.title}</td>
                    <td>${post.category.title}</td>
                    <td>${post.created}</td>
                    <td><i class="fas fa-edit"></i> <i class="fas fa-trash-alt"></i></td>
                        `
                        blogPostListTable.appendChild(row)
                    }
                }
            }
        }

        else {
            newsPostListTable.innerHTML = ''

            newsPostListTable.appendChild(blogPostRowTh)
            for (const post of posts) {
                if (post.type == 'news') {
                    if (post.title.toLowerCase().search(searchByIdTitle.toLowerCase()) != -1 || post.id.toString().search(searchByIdTitle.toString()) != -1) {

                        let row = document.createElement('tr')
                        row.innerHTML =
                            `
                            <td>${post.id}</td >
                    <td class="post__list_title"><a class='go_to_post' target='_blank' href='post${post.id}'><i class="fas fa-external-link-alt"></i></a> ${post.title}</td>
                    <td>${post.category.title}</td>
                    <td>${post.created}</td>
                    <td><i class="fas fa-edit"></i> <i class="fas fa-trash-alt"></i></td>
                        `
                        newsPostListTable.appendChild(row)
                    }
                }
            }
        }

    }


    else {
        postList()
    }
}

let postSearchByCategory = (event) => {

    let searchByCategory = event.target.value

    if (document.querySelector('#BlogPostsCheckbox').checked) {

        blogPostListTable.innerHTML = ''
        blogPostListTable.appendChild(blogPostRowTh)

        for (const post of posts) {
            if (post.type == 'blog') {
                if (searchByCategory == post.category.title) {
                    let row = document.createElement('tr')
                    row.innerHTML += `
                            <td> ${post.id}</td>
                <td class="post__list_title"><a class='go_to_post' target='_blank' href='post${post.id}'><i class="fas fa-external-link-alt"></i></a> ${post.title}</td>
                <td>${post.category.title}</td>
                <td>${post.created}</td>
                <td><i class="fas fa-edit"></i> <i class="fas fa-trash-alt" onclick='postDelete(${post.id})'></i></td>
                        `
                    blogPostListTable.appendChild(row)
                }
                else if (searchByCategory == 'Все') {
                    postList()
                }
            }
        }
    }

    else {
        newsPostListTable.innerHTML = ''
        newsPostListTable.appendChild(blogPostRowTh)

        for (const post of posts) {
            if (post.type == 'news') {
                if (searchByCategory == post.category.title) {
                    let row = document.createElement('tr')
                    row.innerHTML += `
                                <td> ${post.id}</td>
                    <td class="post__list_title"><a class='go_to_post' target='_blank' href='post${post.id}'><i class="fas fa-external-link-alt"></i></a> ${post.title}</td>
                    <td>${post.category.title}</td>
                    <td>${post.created}</td>
                    <td><i class="fas fa-edit"></i> <i class="fas fa-trash-alt" onclick='postDelete(${post.id})'></i></td>
                            `
                    newsPostListTable.appendChild(row)
                }
                else if (searchByCategory == 'Все') {
                    postList()
                }
            }
        }
    }
}

let postDelete = (id) => {
    for (const post in posts) {
        if (posts[post].id == id) {
            if (prompt('Напишите "Подтверждаю" чтобы удалить пост.') == 'Подтверждаю') {
                for (const category of categories) {
                    for (const item in category.items) {
                        if (category.items[item].id == posts[post].id) {
                            category.items.splice(item, 1)
                        }
                    }
                }
                posts.splice(post, 1)
            }
        }
    }

    postListTable.innerHTML = ''
    postList()

    categoriyListTable.innerHTML = ''
    categoryList()

}

let editPostCHange = () => {

    for (const editPostRadio of document.querySelectorAll('.editPost__nav_radio')) {
        if (editPostRadio.checked) {
            for (const item of document.querySelectorAll('.editPost__item')) {
                item.style.display = 'none'
            }
            document.querySelector('.editPost__' + editPostRadio.id).style.display = 'block'
        }
    }
}

let editPost = (index) => {
    document.querySelector('.posts').style.display = 'none'
    document.querySelector('.editPost').style.display = 'block'
    document.querySelector('#editCategory').innerHTML = ''
    document.querySelector('.editPost__text').innerHTML = `<textarea id="post${posts[index].id}" class="if_text">${posts[index].text}</textarea>`
    CKEDITOR.replace(`post${posts[index].id}`)
    for (const category of categories) {
        if (category == posts[index].category) {
            document.querySelector('#editCategory').innerHTML += `<option value='${category.title}' selected>${category.title}</option>`
        }
        else {
            document.querySelector('#editCategory').innerHTML += `<option value='${category.title}'>${category.title}</option>`
        }
    }

    document.querySelector('.editPost__post_title').innerHTML = `Заголовок: <input id="editPostTitle" type="text" style="width: 50%" value="${posts[index].title}" />`

    if (posts[index].isActive) {

        document.querySelector('.editPost__status').innerHTML =
            `
                Статус: <span id="editPostStatus">Активен</span>
                <button id="postActivePassive" onclick="activePassive(${index})" class='red'>Деактивировать</button>
            `
    }
    else {
        document.querySelector('.editPost__status').innerHTML =
            `
                Статус: <b id="editPostStatus" style="margin: auto 20px">Деактивирован</b>
                <button id="postActivePassive" onclick="activePassive(${index})" class='green'>Активировать</button>
            `
    }

    document.querySelector('.editPost__do').innerHTML = ` 
    <button class="editPost__save green" onclick="editPostSave(${index})">Сохранить</button>
    <button class="editPost__delete red" onclick="editPostDelete(${index})">Удалить</button>
    <button class="editPost__cancel green" onclick="editPostCancel()">Назад</button>
    `

    editPostCommentList(index)

}

let editPostCommentList = (index) => {
    editCommentsListTable = document.querySelector('.editPost__comments_table')
    let commentRowTh = document.createElement('tr')
    commentRowTh.innerHTML = `
<th class="comment__list_text_th">Текст комментарии</th>
<th class="comment__list_user_th">Пользователь</th>
<th class="comment__list_date_th">Дата</th>
<th class="comment__list_do_th">Действия</th>`
    editCommentsListTable.innerHTML = ''
    editCommentsListTable.appendChild(commentRowTh)
    let odd = 0

    for (const comment of comments) {
        let row = document.createElement('tr')
        row.id = comments.title
        row.classList.add('commentRow')
        if (comment.post == posts[index]) {
            if (!comment.approved) {
                odd++
                row.innerHTML +=
                    `
                    <td class="comment__list_text"><input type="checkbox" class='edit__comment_checkbox' id='${comment.id}'>${comment.text}</td >
                    <td>${comment.user.userName}</td>
                    <td>${comment.created}</td>
                    <td><span class="approveComment" onclick='editPostApproveComment(${comments.indexOf(comment)}, ${index})'>Одобрить</span> <span class="editPostdeleteComment" onclick='editPostdeleteComment(${comments.indexOf(comment)}, ${index})'>Удалить</span></td>
                        `
                editCommentsListTable.appendChild(row)
                if (odd % 2 == 0) {
                    row.classList.add('odd')
                }
                else { row.classList.remove('odd') }
            }
            else {
                odd++
                row.innerHTML +=
                    `
                <td class="comment__list_text"><input type="checkbox" class='edit__comment_checkbox' id='${comment.id}'>${comment.text}</td >
                <td>${comment.user.userName}</td>
                <td>${comment.created}</td>
                <td><span class="approveComment" onclick='editPostApproveComment(${comments.indexOf(comment)}, ${index})'>Одобрено</span> <span class="editPostdeleteComment" onclick='editPostdeleteComment(${comments.indexOf(comment)}, ${index})'>Удалить</span></td>
                    `
                editCommentsListTable.appendChild(row)
                if (odd % 2 == 0) {
                    row.classList.add('odd')
                }
                else { row.classList.remove('odd') }
            }

        }
    }


    document.querySelector('#editApproveSelectedComment').setAttribute('onclick', `editApproveSelectedComment(${index})`)

    document.querySelector('#editDeleteSelectedComment').setAttribute('onclick', `editDeteleteSelectedComment(${index})`)

}

let editPostdeleteComment = (commentIndex, postIndex) => {
    if (confirm('Вы подтверждаете что хотите удалить пост?')) {
        comments.splice(commentIndex, 1)
        commentsList()
        editPostCommentList(postIndex)
    }
}

let editPostApproveComment = (commentIndex, postIndex) => {
    if (comments[commentIndex].approved) {
        if (confirm("Вы подтверждаете отменить одобрению поста?")) {
            comments[commentIndex].approved = !comments[commentIndex].approved
            commentsList()
            editPostCommentList(postIndex)
        }
    }
    else {
        if (confirm("Вы подтверждаете одобрить пост?")) {
            comments[commentIndex].approved = !comments[commentIndex].approved
            commentsList()
            editPostCommentList(postIndex)
        }
    }

}

let editSelectAllComments = (event) => {
    if (event.target.checked) {
        for (const commentCheckbox of document.querySelectorAll('.edit__comment_checkbox')) {
            commentCheckbox.checked = true
        }
    }
    else {
        for (const commentCheckbox of document.querySelectorAll('.edit__comment_checkbox')) {
            commentCheckbox.checked = false
        }
    }

}

let editApproveSelectedComment = (index) => {
    let selectedElems = []
    for (const commentCheckbox of document.querySelectorAll('.edit__comment_checkbox')) {
        if (commentCheckbox.checked) {
            for (const comment in comments) {
                if (commentCheckbox.id == comments[comment].id) {
                    selectedElems.push(comments[comment].id)
                }
            }
        }
    }
    if (selectedElems.length != 0 && confirm('Вы подтверждаете что хотите одобрить выбранные елементы?')) {
        for (const selectedElem of selectedElems) {
            for (const comment in comments) {
                if (comments[comment].id == selectedElem) {
                    comments[comment].approved = true
                }
            }
        }
        alert('Одобрено!')
    }
    document.querySelector('#editSelectAllComments').checked = false
    commentsList()
    editPostCommentList(index)
}

let editDeteleteSelectedComment = (index) => {
    let selectedElems = []
    for (const commentCheckbox of document.querySelectorAll('.edit__comment_checkbox')) {
        if (commentCheckbox.checked) {
            for (const comment in comments) {
                if (commentCheckbox.id == comments[comment].id) {
                    selectedElems.push(comments[comment])
                }
            }
        }
    }
    if (selectedElems.length != 0 && confirm('Вы уверены что хотите удалить выбранные посты?')) {
        for (const selectedElem of selectedElems) {
            comments.splice(comments.indexOf(selectedElem), 1)
        }
        alert('Удалено!')
    }
    document.querySelector('#editSelectAllComments').checked = false
    commentsList()
    editPostCommentList(index)
}

let activePassive = (index) => {
    posts[index].isActive = !posts[index].isActive

    if (posts[index].isActive) {
        if (prompt('Напишите "Подтверждаю" чтобы деактивировать пост.') == 'Подтверждаю') {
            document.querySelector('#postActivePassive').innerHTML = "Дективировать"
            document.querySelector('#editPostStatus').innerHTML = "Активен"
        }
    }
    else {
        if (prompt('Напишите "Подтверждаю" чтобы активировать пост.') == 'Подтверждаю') {
            document.querySelector('#postActivePassive').innerHTML = "Активировать"
            document.querySelector('#editPostStatus').innerHTML = "Деактивирован"
        }
    }
}

let editPostSave = (index) => {
    if (document.querySelector('#editPostTitle').value.trim() != '') {
        if (prompt('Напишите "Подтверждаю" чтобы сохранить изменённые данные.') == 'Подтверждаю') {
            for (const category of categories) {
                if (category.title == document.querySelector('#editCategory').value) {
                    posts[index].category = category
                }
            }
            posts[index].title = document.querySelector('#editPostTitle').value
            posts[index].text = CKEDITOR.instances[`post${posts[index].id}`].getData()
            invitePostToCategory()
            categoryList()
            postList()
            document.querySelector('.editPost').style.display = 'none'
            document.querySelector('.posts').style.display = 'block'
        }
    }
    else {
        alert('Заполните поля!')
    }
}

let editPostDelete = (index) => {
    if (prompt('Напишите "Подтверждаю" чтобы удалить данные.') == 'Подтверждаю') {
        posts.splice(index, 1)
        invitePostToCategory()
        categoryList()
        postList()
        document.querySelector('.editPost').style.display = 'none'
        document.querySelector('.posts').style.display = 'block'
    }
}

let editPostCancel = () => {
    document.querySelector('.editPost').style.display = 'none'
    document.querySelector('.posts').style.display = 'block'
}

let newPost = () => {
    document.querySelector('#newPostCategory').innerHTML = ''
    for (const category of categories) {
        document.querySelector('#newPostCategory').innerHTML += `<option value="${category.title}">${category.title}</option>`
    }
    document.querySelector('.newPost').style.display = 'block'
}

let addPost = () => {

    let newPostCategory = document.querySelector('#newPostCategory').value
    let postTitle = document.querySelector('#newPostTitle').value
    let postText = CKEDITOR.instances[`editPostText`].getData()
    let postCommentAllowed = document.querySelector('#newPostCommentsApprove').checked
    let postType
    if (document.querySelector('#blogPost').checked) {
        postType = document.querySelector('#blogPost').value
    }
    else {
        postType = document.querySelector('#newsPost').value
    }

    console.log(postType)

    for (const category of categories) {
        if (category.title == newPostCategory) {
            postCategory = category
        }
    }
    if (newPostCategory == 'Все') {
        alert('Выберите категорию!')
    }
    else if (postTitle.trim() == '') {
        alert('Заполните поле "Заголовок"!')
    }
    else if (postText.trim() == '') {
        alert('Заполните поле "Текст"!')
    }
    else {
        if (confirm('Добавить новый пост?')) {
            posts.push({
                id: posts.length,
                title: postTitle,
                text: postText,
                category: postCategory,
                created: (day + '.' + month + '.' + date.getFullYear()),
                commentAllowed: postCommentAllowed,
                comments: [],
                isActive: true,
                type: postType
            })
            document.querySelector('.newPost').style.display = 'none'
            document.querySelector('#newPostTitle').value = ''
            document.querySelector('#newPostCommentsApprove').checked = false
            for (const cke of document.querySelectorAll('.cke_wysiwyg_frame')) {
                cke.contentDocument.body.querySelector('p').textContent = ''
            }

            invitePostToCategory()
            postList()
            categoryList()
            alert('Добавлен новый пост!')
        }

    }

}

let addPostCancel = () => {
    document.querySelector('.newPost').style.display = 'none'
}

let changePosts = () => {

    if (document.querySelector('#BlogPostsCheckbox').checked) {
        document.querySelector('.blog_posts__list').style.display = 'block'
        document.querySelector('.news_posts__list').style.display = 'none'
        document.querySelector('.selectedNav__item').classList.remove('selectedNav__item')
        document.querySelector('#blogPostsLabel').classList.add('selectedNav__item')
    }
    else {
        document.querySelector('.blog_posts__list').style.display = 'none'
        document.querySelector('.news_posts__list').style.display = 'block'
        document.querySelector('.selectedNav__item').classList.remove('selectedNav__item')
        document.querySelector('#newsPostsLabel').classList.add('selectedNav__item')
    }
}

postList()
// ===========================Категории==============================================

// ===========================Категории==============================================
let categoryList = () => {
    categoriyListTable.innerHTML = ''
    categoriyListTable.appendChild(categoryRowTh)
    let odd = 0
    for (const category of categories) {
        if (category.title != 'Все') {
            let row = document.createElement('tr')
            row.id = category.title
            odd++
            row.innerHTML +=
                `
                    <td class="category__list_title" > <a class='go_to_post' target='_blank' href='#'><i class="fas fa-external-link-alt"></i></a> ${category.title}</td >
                    <td>${category.items.length}</td>
                    <td><i class="fas fa-power-off" id="cat${categories.indexOf(category)}" onClick='categoryStatusSwitch(${categories.indexOf(category)}, event)'></i> <i class="fas fa-edit" onclick='editCategory(${categories.indexOf(category)})'></i> <i class="fas fa-trash-alt" onclick='categoryDelete(${categories.indexOf(category)})'></i></td>
                        `
            categoriyListTable.appendChild(row)
            if (odd % 2 == 0) {
                row.classList.add('odd')
            }
            else { row.classList.remove('odd') }

            if (!category.isActive) {
                document.querySelector(`#cat${categories.indexOf(category)}`).classList.add('categoryOff')
            }
        }
    }
}

let categoryDelete = (index) => {
    let categoryItems = categories[index].items
    if (prompt(`Напишите "Подтверждаю" для того чтобы удалить категорию ${categories[index].title}. Вместе с категорией исчезнут и посты!`) == 'Подтверждаю') {
        for (const categoryItem of categoryItems) {
            for (const post of posts) {
                if (post.id == categoryItem.id) {
                    posts.splice(posts.indexOf(post), 1)
                }
            }
        }
        categories.splice(index, 1)
        postList()
        categoryList()
    }
    else {
        alert('Категория не удалена.')
    }
    document.querySelector('.editCategory').style.display = 'none'
    document.querySelector('.categories').style.display = 'block'
}

let categoryStatusSwitch = (index) => {
    if (categories[index].isActive) {
        categories[index].isActive = !categories[index].isActive
        event.target.classList.add('categoryOff')
    }
    else {
        categories[index].isActive = !categories[index].isActive
        event.target.classList.remove('categoryOff')
    }
}

let editCategory = (index) => {
    document.querySelector('.categories').style.display = 'none'
    document.querySelector('.editCategory').style.display = 'block'
    document.querySelector('.editCategory__edit_title').innerHTML =
        `
    <label for=''>Название: </label>
    <input type='text' id='editCategoryTitle' value='${categories[index].title}'/>
    `
    document.querySelector('.editCategory__do').innerHTML = `
    <button class="editCategory__save green" onclick="editcategorySave(${index})">Сохранить</button>
    <button class="editCategory__delete red" onclick="categoryDelete(${index})">Удалить</button>
    <button class="editCategory__cancel green" onclick="editCategoryCancel()">Назад</button>
    `
}

let editcategorySave = (index) => {
    if (document.querySelector('#editCategoryTitle').value.trim() != '') {
        if (prompt('Напишите "Подтверждаю" для того чтобы сохранить изменения.') == 'Подтверждаю') {
            categories[index].title = document.querySelector('#editCategoryTitle').value
            invitePostToCategory()
            categoryOptions()
            postList()
            categoryList()
            document.querySelector('.editCategory').style.display = 'none'
            document.querySelector('.categories').style.display = 'block'
        }
    }
    else {
        alert('Заполните поле "Название"!')
    }
}

let editCategoryCancel = () => {
    document.querySelector('.editCategory').style.display = 'none'
    document.querySelector('.categories').style.display = 'block'
}

let showAddCategory = () => {
    document.querySelector('#newCatMainLabel').classList.add('selectedNav__item')
    document.querySelector('#newCatSeoLabel').classList.remove('selectedNav__item')
    document.querySelector('#categoriesNewMainCheckbox').checked = true
    document.querySelector('.categories__new_main').style.display = 'block'
    document.querySelector('.catecories__new_seo').style.display = 'none'
    document.querySelector('.categories__new').style.display = 'block'
}

let addCategory = () => {
    let title = document.querySelector('#newCategoryName').value
    let items = []
    let isActive = document.querySelector('#newCategoryIsActive').checked
    let seoTitle = document.querySelector('#categoriesNewSeoTitle').value
    let seoKeywords = document.querySelector('#categoriesNewSeoKeywords').value
    let seoDescription = document.querySelector('#categoriesNewSeoDesctription').value
    let seoText = CKEDITOR.instances[`categoriesNewSeoText`].getData()

    if (title.trim() != '' && confirm('Добавить новую категорию?')) {
        categories.push(
            {
                title,
                items,
                isActive,
                seo: {
                    seoTitle: seoTitle,
                    seoKeywords: seoKeywords.split(' '),
                    seoDescription: seoDescription,
                    seoText: seoText
                }
            })
        document.querySelector('.categories__new').style.display = 'none'
        categoryList()
        categoryOptions()

        document.querySelector('#newCategoryName').value = ''
        document.querySelector('#newCategoryIsActive').checked = false
        document.querySelector('#categoriesNewSeoTitle').value = ''
        document.querySelector('#categoriesNewSeoKeywords').value = ''
        document.querySelector('#categoriesNewSeoDesctription').value = ''
        document.querySelector('#categoriesNewSeoText').innerHTML = ''
        for (const cke of document.querySelectorAll('.cke_wysiwyg_frame')) {
            cke.contentDocument.body.querySelector('p').textContent = ''
        }

    }
    else {
        alert('Заполните поле "Название"!')
    }
}

let addCategoryCancel = () => {
    document.querySelector('.categories__new').style.display = 'none'
}

let changeAddCategory = () => {
    if (document.querySelector('#categoriesNewSeoCheckbox').checked) {
        document.querySelector('.catecories__new_seo').style.display = 'flex'
        document.querySelector('.categories__new_main').style.display = 'none'
        document.querySelector('.selectedNav__item').classList.remove('selectedNav__item')
        document.querySelector('#newCatSeoLabel').classList.add('selectedNav__item')
    }
    else {
        document.querySelector('.catecories__new_seo').style.display = 'none'
        document.querySelector('.categories__new_main').style.display = 'block'
        document.querySelector('.selectedNav__item').classList.remove('selectedNav__item')
        document.querySelector('#newCatMainLabel').classList.add('selectedNav__item')
    }
}

categoryList()
// ===========================Категории==============================================




// ===========================Комментарии==============================================
let commentsList = () => {
    let blogCommentRowTh = document.createElement('tr')
    let newsCommentRowTh = document.createElement('tr')
    blogCommentRowTh.innerHTML = `
        <th class="comment__list_text_th">Текст комментарии</th>
        <th class="comment__list_user_th">Пользователь</th>
        <th class="comment__list_date_th">Дата</th>
        <th class="comment__list_do_th">Действия</th>`

    newsCommentRowTh.innerHTML = `
        <th class="comment__list_text_th">Текст комментарии</th>
        <th class="comment__list_user_th">Пользователь</th>
        <th class="comment__list_date_th">Дата</th>
        <th class="comment__list_do_th">Действия</th>`
    blogCommentsListTable.innerHTML = ''
    blogCommentsListTable.appendChild(blogCommentRowTh)
    newsCommenstListTable.innerHTML = ''
    newsCommenstListTable.appendChild(newsCommentRowTh)
    let odd1 = 0
    let odd2 = 0
    for (const comment of comments) {
        if (comment.post.type == 'blog') {
            let row = document.createElement('tr')
            row.id = comments.title
            row.classList.add('commentRow')
            odd1++
            if (comment.approved != true) {
                row.innerHTML +=
                    `
                    <td class="comment__list_text"><div><input type="checkbox" class='blog_comment__Checkbox' id='${comment.id}'></div>${comment.text}</td >
                    <td>${comment.user.userName}</td>
                    <td>${comment.created}</td>
                    <td><span class="approveComment" onclick='approveComment(${comments.indexOf(comment)})'>Одобрить</span> <span class="deleteComment" onclick='commentDelete(${comments.indexOf(comment)})'>Удалить</span></td>
                        `
                blogCommentsListTable.appendChild(row)
                if (odd1 % 2 == 0) {
                    row.classList.add('odd')
                }
                else { row.classList.remove('odd') }
            }

            else {
                row.innerHTML +=
                    `
                    <td class="comment__list_text"><div><input type="checkbox" class='blog_comment__Checkbox' id='${comment.id}'></div>${comment.text}</td >
                    <td>${comment.user.userName}</td>
                    <td>${comment.created}</td>
                    <td><span class="approveComment" onclick='approveComment(${comments.indexOf(comment)})'>Одобрено</span> <span class="deleteComment" onclick='commentDelete(${comments.indexOf(comment)})'>Удалить</span></td>
                        `
                blogCommentsListTable.appendChild(row)
                if (odd1 % 2 == 0) {
                    row.classList.add('odd')
                }
                else { row.classList.remove('odd') }
            }
        }

        else {
            let row = document.createElement('tr')
            row.id = comments.title
            row.classList.add('commentRow')
            odd2++
            if (comment.approved != true) {
                row.innerHTML +=
                    `
                    <td class="comment__list_text"><div><input type="checkbox" class='news_comment__Checkbox' id='${comment.id}'></div>${comment.text}</td >
                    <td>${comment.user.userName}</td>
                    <td>${comment.created}</td>
                    <td><span class="approveComment" onclick='approveComment(${comments.indexOf(comment)})'>Одобрить</span> <span class="deleteComment" onclick='commentDelete(${comments.indexOf(comment)})'>Удалить</span></td>
                        `
                newsCommenstListTable.appendChild(row)
                if (odd2 % 2 == 0) {
                    row.classList.add('odd')
                }
                else { row.classList.remove('odd') }
            }

            else {
                row.innerHTML +=
                    `
                    <td class="comment__list_text"><div><input type="checkbox" class='news_comment__Checkbox' id='${comment.id}'></div>${comment.text}</td >
                    <td>${comment.user.userName}</td>
                    <td>${comment.created}</td>
                    <td><span class="approveComment" onclick='approveComment(${comments.indexOf(comment)})'>Одобрено</span> <span class="deleteComment" onclick='commentDelete(${comments.indexOf(comment)})'>Удалить</span></td>
                        `
                newsCommenstListTable.appendChild(row)
                if (odd2 % 2 == 0) {
                    row.classList.add('odd')
                }
                else { row.classList.remove('odd') }
            }
        }
    }
}

let commentDelete = (index) => {
    if (confirm('Вы подтверждаете что хотите удалить комментарию?')) {
        comments.splice(index, 1)
        commentsList()
    }
}

let approveComment = (index) => {
    console.log(comments[index].approved)

    if (!comments[index].approved) {
        console.log('a')
        if (confirm('Вы подтверждаете что хотите одобрить комментарию?')) {
            comments[index].approved = true
            commentsList()
        }
    }
    else {
        console.log('b')
        if (confirm('Вы подтверждаете что хотите отменить одобрения комментарии?')) {
            comments[index].approved = false
            commentsList()
        }
    }

}

let selectAllComments = (event) => {

    if (document.querySelector('#BlogCommentsCheckbox').checked) {
        if (event.target.checked) {
            for (const commentCheckbox of document.querySelectorAll('.blog_comment__Checkbox')) {
                commentCheckbox.checked = true
            }
        }
        else {
            for (const commentCheckbox of document.querySelectorAll('.blog_comment__Checkbox')) {
                commentCheckbox.checked = false
            }
        }
    }

    else {
        if (event.target.checked) {
            for (const commentCheckbox of document.querySelectorAll('.news_comment__Checkbox')) {
                commentCheckbox.checked = true
            }
        }
        else {
            for (const commentCheckbox of document.querySelectorAll('.news_comment__Checkbox')) {
                commentCheckbox.checked = false
            }
        }
    }


}

let deleteSelectedComment = () => {
    let blogSelectedElems = []
    let newsSelectedElems = []


    for (const commentCheckbox of document.querySelectorAll('.blog_comment__Checkbox')) {
        if (commentCheckbox.checked) {
            for (const comment in comments) {
                if (commentCheckbox.id == comments[comment].id) {
                    blogSelectedElems.push(comments[comment])
                }
            }
        }
    }

    for (const commentCheckbox of document.querySelectorAll('.news_comment__Checkbox')) {
        if (commentCheckbox.checked) {
            for (const comment in comments) {
                if (commentCheckbox.id == comments[comment].id) {
                    newsSelectedElems.push(comments[comment])
                }
            }
        }
    }

    if (blogSelectedElems.length != 0 && confirm('Вы уверены что хотите удалит выбранные комментарии?')) {
        for (const selectedElem of blogSelectedElems) {
            for (const comment in comments) {
                if (comments[comment] == selectedElem) {
                    let userIndex = users.indexOf(comments[comment].user)
                    comments.splice(comment, 1)
                    editPostCommentList(userIndex)
                }
            }
        }
        alert('Удалено!')
    }

    if (newsSelectedElems.length != 0 && confirm('Вы уверены что хотите удалит выбранные комментарии?')) {
        for (const selectedElem of newsSelectedElems) {
            for (const comment in comments) {
                if (comments[comment] == selectedElem) {
                    let userIndex = users.indexOf(comments[comment].user)
                    comments.splice(comment, 1)
                    editPostCommentList(userIndex)
                }
            }
        }
        alert('Удалено!')
    }

    document.querySelector('#selectAllComments').checked = false
    commentsList()
}

let approveSelectedComment = () => {
    let blogSelectedElems = []
    let newsSelectedElems = []

    for (const commentCheckbox of document.querySelectorAll('.blog_comment__Checkbox')) {
        if (commentCheckbox.checked) {
            for (const comment in comments) {
                if (commentCheckbox.id == comments[comment].id) {
                    blogSelectedElems.push(comments[comment])
                }
            }
        }
    }

    for (const commentCheckbox of document.querySelectorAll('.news_comment__Checkbox')) {
        if (commentCheckbox.checked) {
            for (const comment in comments) {
                if (commentCheckbox.id == comments[comment].id) {
                    newsSelectedElems.push(comments[comment])
                }
            }
        }
    }
    if ((blogSelectedElems.length != 0 || newsSelectedElems.length != 0) && confirm('Вы подтверждаете что одобряете выбранные комментарии?')) {

        for (const blogSelectedElem of blogSelectedElems) {
            blogSelectedElem.approved = !blogSelectedElem.approved
            editPostCommentList(users.indexOf(blogSelectedElem.user))
        }

        for (const newsSelectedElem of newsSelectedElems) {
            newsSelectedElem.approved = !newsSelectedElem.approved
            editPostCommentList(users.indexOf(newsSelectedElem.user))
        }
        alert('Одобрено!')
    }
    document.querySelector('#selectAllComments').checked = false
    commentsList()
}

let changeComments = () => {
    if (document.querySelector('#BlogCommentsCheckbox').checked) {
        document.querySelector('.blog__comments_list').style.display = 'block'
        document.querySelector('.news__comments_list').style.display = 'none'
        document.querySelector('.selectedNav__item').classList.remove('selectedNav__item')
        document.querySelector('#blogCommentsLabel').classList.add('selectedNav__item')
    }
    else {
        document.querySelector('.blog__comments_list').style.display = 'none'
        document.querySelector('.news__comments_list').style.display = 'block'
        document.querySelector('.selectedNav__item').classList.remove('selectedNav__item')
        document.querySelector('#newsCommentsLabel').classList.add('selectedNav__item')
    }
}

commentsList()
// ===========================Комментарии==============================================

