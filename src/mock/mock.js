import Mock from 'mockjs'
let data=[
    {'id':0,'name':'张瑞雪','title':'张吉林人真好','pic':'/1.jpg'},
    {'id':1,'name':'张瑞雪','title':'张吉林人真好','pic':'/1.jpg'},
    {'id':2,'name':'张瑞雪','title':'张吉林人真好','pic':'/1.jpg'},
    {'id':3,'name':'张瑞雪','title':'张吉林人真好','pic':'/1.jpg'},
    {'id':4,'name':'张瑞雪','title':'张吉林人真好','pic':'/1.jpg'},
    {'id':5,'name':'张瑞雪','title':'张吉林人真好','pic':'/1.jpg'},
    {'id':6,'name':'张瑞雪','title':'张吉林人真好','pic':'/1.jpg'},
    {'id':7,'name':'张瑞雪','title':'张吉林人真好','pic':'/1.jpg'},
    {'id':8,'name':'张瑞雪','title':'张吉林人真好','pic':'/1.jpg'},
    {'id':9,'name':'张瑞雪','title':'张吉林人真好','pic':'/1.jpg'},
    {'id':10,'name':'张瑞雪','title':'张吉林人真好','pic':'/1.jpg'},
    {'id':11,'name':'张瑞雪','title':'张吉林人真好','pic':'/1.jpg'},
    {'id':12,'name':'张瑞雪','title':'张吉林人真好','pic':'/1.jpg'},
    {'id':13,'name':'张瑞雪','title':'张吉林人真好','pic':'/1.jpg'},
    {'id':14,'name':'张瑞雪','title':'张吉林人真好','pic':'/1.jpg'},
    {'id':15,'name':'张瑞雪','title':'张吉林人真好','pic':'/1.jpg'},
    {'id':16,'name':'张瑞雪','title':'张吉林人真好','pic':'/1.jpg'},
    {'id':17,'name':'张瑞雪','title':'张吉林人真好','pic':'/1.jpg'},
    {'id':18,'name':'张瑞雪','title':'张吉林人真好','pic':'/1.jpg'},
    {'id':19,'name':'张瑞雪','title':'张吉林人真好','pic':'/1.jpg'},

]
Mock.mock('/list','post',function (options){
    let {page,pageSize} =JSON.parse(options.body)
    console.log(pageSize,page)
    if(page<=0){
        page=1
    }if(page<=19 && page>=15){
        page=5
    }
    let list = data.slice((page-1)*pageSize,page*pageSize)
    return {
        'status':200,
        'list':list,

    }
})