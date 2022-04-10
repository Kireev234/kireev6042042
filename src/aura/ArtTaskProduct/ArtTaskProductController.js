/**
 * Created by akireyeu on 23.12.2019.
 */
({
    doInit : function(component, event, helper)
    {
        var pSize = component.get("v.pageSize");
        component.set("v.start",0);
        component.set("v.end",pSize-1);
        var paginationList = [];
        var action = component.get("c.getProduct");
        component.set("v.num",1);
        component.set("v.trufButtonF",false);
        action.setCallback(this, function(response)
        {
            var state = response.getState();
            if (component.isValid() && state === "SUCCESS")
            {
                var value = response.getReturnValue();

                var size = value.length;
                component.set('v.numSize', size );
                component.set("v.productListFull", value);
                component.set("v.paginationList", value[0]);
                if(size<=pSize){
                    component.set('v.trufButtonL', false);
                }
                for(var i=0; i<pSize; i++){
                    paginationList.push(value[i]);
                }
                component.set('v.productList', paginationList);
            }
        });
        $A.enqueueAction(action);

        var act = component.get("c.getSesId");
        act.setCallback(this, function(response)
        {
            var state = response.getState();
            if (component.isValid() && state === "SUCCESS")
            {
                var value = response.getReturnValue();
                component.set('v.sesId', value);
                //console.log(value);
            }
        });
        $A.enqueueAction(act);
    },

    handleClick : function(component, event, helper) {
        // component.set("v.truf", !component.get("v.truf"));
        var v = component.get("v.truf");
        component.set("v.truf",!v);
        var v2 = component.get("v.trufButton");
        component.set("v.trufButton",!v2);
        var num = component.get("v.num");
        var pageSize = component.get("v.pageSize");
        var sort = component.get("v.sort");
        var sortR = component.get("v.sortR");
        var sortV = component.get("v.sortV");
        var sortVR = component.get("v.sortVR");
        var sortL = component.get("v.sortL");
        var sortLR = component.get("v.sortLR");
        var sortD = component.get("v.sortD");
        var sortDR = component.get("v.sortDR");
        var txtVal = event.getSource().get("v.value");
        if(num>1){
            var n = num-1;
            txtVal = n*pageSize+txtVal;
        }
        component.set("v.index",txtVal);
        var v3 = component.get("v.productListFull");
        component.set("v.paginationList",v3[txtVal]);
        var list = v3[txtVal];
        component.set("v.paginationListId",list.Id);
        helper.timeOut(component, list.Id);
        var sId = component.get("v.sesId");
        var action = component.get("c.setViews");
        action.setParams({ id : list.Id, sId : sId});
        action.setCallback(this, function(response)
        {
            var state = response.getState();
            if (component.isValid() && state === "SUCCESS")
            {
                var val = response.getReturnValue();
                if(sort){
                    val = helper.sortBy(component, val);
                }
                if(sortR){
                    val = helper.sortByR(component, val);
                }
                if(sortV){
                    val = helper.sortByV(component, val);
                }
                if(sortVR){
                    val = helper.sortByVR(component, val);
                }
                if(sortL){
                    val = helper.sortByL(component, val);
                }
                if(sortLR){
                    val = helper.sortByLR(component, val);
                }
                if(sortD){
                    val = helper.sortByD(component, val);
                }
                if(sortDR){
                    val = helper.sortByDR(component, val);
                }
                else {component.set("v.productListFull", val);}
                component.set("v.productListFull", val);
                helper.setProductList(component, val);
                helper.setPagList(component, event, helper);
            }
        });
        $A.enqueueAction(action);

        var act = component.get("c.getHandleLikeDislike");
        act.setParams({ id : list.Id });
        act.setCallback(this, function(response)
        {
            var state = response.getState();
            if (component.isValid() && state === "SUCCESS")
            {
                var val = response.getReturnValue();
                if(val[0]==0){
                    component.set("v.liked",false);
                }
                else{
                    component.set("v.liked",true);
                }
                if(val[1]==0){
                    component.set("v.disliked",false);
                }
                else{
                    component.set("v.disliked",true);
                }
            }
        });
        $A.enqueueAction(act);

        var ac = component.get("c.getReview");
        ac.setParams({ id : list.Id });
        ac.setCallback(this, function(response)
        {
            var state = response.getState();
            if (component.isValid() && state === "SUCCESS")
            {
                var val = response.getReturnValue();
                component.set("v.sizeReview", val.length);
            }
        });
        $A.enqueueAction(ac);
    },

    handleClickRev : function(component, event, helper) {
        var val = component.get("v.isO");
        component.set("v.isO", !val);
        var v2 = component.get("v.trufButtonRev");
        component.set("v.trufButtonRev",!v2);
        var sort = component.get("v.sortRev");
        var sortR = component.get("v.sortRRev");
        var sortV = component.get("v.sortVRev");
        var sortVR = component.get("v.sortVRRev");
        var sortL = component.get("v.sortLRev");
        var sortLR = component.get("v.sortLRRev");
        var sortD = component.get("v.sortDRev");
        var sortDR = component.get("v.sortDRRev");
        var num = component.get("v.numRev");
        var pageSize = component.get("v.pageSizeRev");
        var txtVal = event.getSource().get("v.value");
        var pId = component.get("v.paginationList").Id;
        if(num>1){
            var n = numRev-1;
            txtVal = n*pageSize+txtVal;
        }

        component.set("v.index",txtVal);
        var v3 = component.get("v.reviewList");
        component.set("v.review",v3[txtVal]);
        var list = v3[txtVal];
        component.set("v.reviewId",list.Id);
        var sId = component.get("v.sesId");
        var action = component.get("c.setViewsReview");
        action.setParams({ id : list.Id, sId : sId, productId : pId});
        action.setCallback(this, function(response)
        {
            var state = response.getState();
            if (component.isValid() && state === "SUCCESS")
            {
                var val = response.getReturnValue();
                if(sort){
                    val = helper.sortBy(component, val);
                }
                if(sortR){
                    val = helper.sortByR(component, val);
                }
                if(sortV){
                    val = helper.sortByV(component, val);
                }
                if(sortVR){
                    val = helper.sortByVR(component, val);
                }
                if(sortL){
                    val = helper.sortByL(component, val);
                }
                if(sortLR){
                    val = helper.sortByLR(component, val);
                }
                if(sortD){
                    val = helper.sortByD(component, val);
                }
                if(sortDR){
                    val = helper.sortByDR(component, val);
                }
                else {component.set("v.reviewList", val);}
                helper.setReviewList(component, val);
                helper.setReview(component, event, helper);
            }
        });
        $A.enqueueAction(action);

        var act = component.get("c.getHandleLikeDislikeRev");
        act.setParams({ id : list.Id });
        act.setCallback(this, function(response)
        {
            var state = response.getState();
            if (component.isValid() && state === "SUCCESS")
            {
                var val = response.getReturnValue();
                if(val[0]==0){
                    component.set("v.likedRev",false);
                }
                else{
                    component.set("v.likedRev",true);
                }
                if(val[1]==0){
                    component.set("v.dislikedRev",false);
                }
                else{
                    component.set("v.dislikedRev",true);
                }
            }
        });
        $A.enqueueAction(act);

    },
    handleLike : function(component, event, helper) {
        var list = component.get("v.paginationList");
        var act = component.get("c.getHandleLikeDislike");
        act.setParams({ id : list.Id});
        act.setCallback(this, function(response)
        {
            var state = response.getState();
            if (component.isValid() && state === "SUCCESS")
            {
                var val = response.getReturnValue();
                helper.like(component, list, val[0], val[1] );
            }
        });
        $A.enqueueAction(act);
    },

    handleLikeRev : function(component, event, helper) {
        var list = component.get("v.review");
        var act = component.get("c.getHandleLikeDislikeRev");
        act.setParams({ id : list.Id});
        act.setCallback(this, function(response)
        {
            var state = response.getState();
            if (component.isValid() && state === "SUCCESS")
            {
                var val = response.getReturnValue();
                helper.likeRev(component, list, val[0], val[1] );
            }
        });
        $A.enqueueAction(act);
    },

    showReview : function(component, event, helper) {
        var list = component.get("v.reviewList");
        component.set("v.isOpenTable", true);
        component.set("v.isO", false);
        component.set("v.trufButtonRev", true);
        component.set("v.numRev", 1);
        component.set("v.startRev", 0);
        component.set("v.endRev", 4);
        var lst = [];
        if(list.length<5){
        for(var i=0; i<list.length; i++){
            lst.push(list[i]);
          }
            component.set("v.trufButtonLReview", false);
        }
        else
        for(var i=0; i<5; i++){
            lst.push(list[i]);
        }
        component.set("v.reviewListSel", lst);
        if(list.length>5){
            component.set("v.trufButtonLReview", true);
        }
    },
    handleDislike : function(component, event, helper) {
        var list = component.get("v.paginationList");
        // var like = component.get("v.numLike");
        // var dislike = component.get("v.numDislike");
        var act = component.get("c.getHandleLikeDislike");
        act.setParams({ id : list.Id});
        act.setCallback(this, function(response)
        {
            var state = response.getState();
            if (component.isValid() && state === "SUCCESS")
            {
                var val = response.getReturnValue();
                helper.dislike(component, list, val[0], val[1] );
            }
        });
        $A.enqueueAction(act);
    },

    handleDislikeRev : function(component, event, helper) {

        var list = component.get("v.review");
        var act = component.get("c.getHandleLikeDislikeRev");
        act.setParams({ id : list.Id});
        act.setCallback(this, function(response)
        {
            var state = response.getState();
            if (component.isValid() && state === "SUCCESS")
            {
                var val = response.getReturnValue();
                helper.dislikeRev(component, list, val[0], val[1] );
            }
        });
        $A.enqueueAction(act);

    },

    CheckLength : function(component, event, helper)
    {
        var list = component.get("v.productListFull");
        var pageSize = Number(component.get("v.pageSize"));
        var num = Number(component.find("number").get('v.value'));
        if(num==null || num<1 ){
            num=1;
            component.set("v.trufButtonL", true);
        }
        if(num>=Math.ceil(Number(list.length)/pageSize)){
            num=Math.ceil(Number(list.length)/pageSize);
            component.set("v.trufButtonL", false);
        }
        var paginationList = [];
        var x = num-1;
        if (num<Number(list.length)/pageSize+1){
            for(var i=x*pageSize; i<x*pageSize+pageSize ; i++)
            {
                if(i<list.length)
                {
                    paginationList.push(list[i]);
                }
            }
        }
        else{}
        component.set("v.num", num);
        component.set("v.productList", paginationList);
        component.set("v.start", x*pageSize);
        component.set("v.end", x*pageSize+pageSize-1);
    },
    CheckLength2 : function(component, event, helper)
    {
        var oppList = component.get("v.reviewList");
        var num = component.find("num").get('v.value');
        num--;
        if (num<1){
            component.set("v.numRev", 1);
            component.set("v.review", oppList[0]);
        }
        else{
        component.set("v.numRev", num);
        component.set("v.review", oppList[num]);}
    },
    handleClickReview : function(component, event, helper)
    {
       // component.set("v.trufRev",true);
        component.set("v.trufViewReview",false);
        component.set("v.trufButton2",false);
        component.set("v.isOpen",true);
        component.set("v.numLikeRev",0);
        component.set("v.numDislikeRev",0);

        var list = component.get("v.review");
        var action = component.get("c.setViewsReview");
        action.setParams({ id : list.Id});
        action.setCallback(this, function(response)
        {
            var state = response.getState();
            if (component.isValid() && state === "SUCCESS")
            {
                var val = response.getReturnValue();
                component.set("v.review", val);
            }
        });
        $A.enqueueAction(action);
    },

    closeModel: function(component, event, helper) {
        component.set("v.isOpen", false);
        component.set("v.trufButton2", true);
        component.set("v.trufViewReview", true);
        component.set("v.likedRev", false);
        component.set("v.dislikedRev", false);
    },
    modal: function(component, event, helper) {
        var val = component.get("v.isO");
        component.set("v.isO", !val);
        var txtVal = event.getSource().get("v.value") ;
        component.set("v.des",txtVal.Description__c);
    },
    closeModelTable: function(component, event, helper) {
        component.set("v.isOpenTable", false);
    },

    onSelectChange : function(component, event, helper) {

        var selected = component.find("records").get("v.value");
        var paginationList = [];
        var list = component.get("v.productListFull");
        if(list.length<=selected){
            component.set("v.trufButtonL", false);
        }
        if(list.length>selected){
            component.set("v.trufButtonL", true);
        }
        for(var i=0; i<selected; i++) {
            if(list.length>i){
                paginationList.push(list[i]);
            }
        }
        component.set("v.productList", paginationList);
        component.set("v.end", selected-1);
        component.set("v.pageSize", selected);
        component.set("v.num", 1);
        component.set("v.start",0);
    },
    onSelectChangeRev : function(component, event, helper) {

        var selected = component.find("recor").get("v.value");
        var paginationList = [];
        var list = component.get("v.reviewList");

        if(list.length<=selected){
            component.set("v.trufButtonLReview", false);
        }
        if(list.length>selected){
            component.set("v.trufButtonLReview", true);
        }
        for(var i=0; i<selected; i++) {
            if(list.length>i){
                paginationList.push(list[i]);
            }
        }
        component.set("v.reviewListSel", paginationList);
        component.set("v.endRev", selected-1);
        component.set("v.pageSizeRev", selected);
        component.set("v.numRev", 1);
        component.set("v.startRev",0);
    },

    next3 : function(component, event, helper)
    {
        var list = component.get("v.productListFull");
        var num = Number(component.get("v.num"));
        var end = Number(component.get("v.end"));
        var start = Number(component.get("v.start"));
        var pageSize = Number(component.get("v.pageSize"));
        var paginationList = [];
        for(var i=end+1; i<end+pageSize+1; i++)
        {
            if(list.length > i)
            {
                paginationList.push(list[i]);
            }
        }
        start = Number(start)+Number(pageSize);
        end = Number(end)+Number(pageSize);
        if(end+1>=list.length){
            component.set("v.trufButtonL",false);
        }
        component.set("v.start",start);
        component.set("v.end",end);
        component.set("v.productList", paginationList);
        component.set("v.num", num+1);
    },
    next3Rev : function(component, event, helper)
    {
        var list = component.get("v.reviewList");
        var num = Number(component.get("v.numRev"));
        var end = Number(component.get("v.endRev"));
        var start = Number(component.get("v.startRev"));
        var pageSize = Number(component.get("v.pageSizeRev"));
        var paginationList = [];
        for(var i=end+1; i<end+pageSize+1; i++)
        {
            if(list.length > i)
            {
                paginationList.push(list[i]);
            }
        }
        start = Number(start)+Number(pageSize);
        end = Number(end)+Number(pageSize);
        if(end+1>=list.length){
            component.set("v.trufButtonLReview",false);
        }
        component.set("v.startRev",start);
        component.set("v.endRev",end);
        component.set("v.reviewListSel", paginationList);
        component.set("v.numRev", num+1);
    },

    previous3 : function(component, event, helper)
    {
        var num = component.get("v.num");
        var list = component.get("v.productListFull");
        var end = component.get("v.end");
        var start = component.get("v.start");
        var pageSize = component.get("v.pageSize");
        var paginationList = [];
        var counter = start-pageSize;
        if(counter<0){counter=0;}
        for(var i=counter; i<start ; i++)
        {
            if(i<list.length)
            {
                paginationList.push(list[i]);
            }
        }
        start = Number(start)-Number(pageSize);
        if(start<0){start=0}
        end = Number(end)-Number(pageSize);
        if(end<pageSize-1){
            end=pageSize-1;
        }
        if(end<=list.length){
            component.set("v.trufButtonL",true);
        }
        component.set("v.start",start);
        component.set("v.end",end);
        component.set("v.productList", paginationList);
        component.set("v.num", num-1);
    },
    previous3Rev : function(component, event, helper)
    {
        var num = component.get("v.numRev");
        var list = component.get("v.reviewList");
        var end = component.get("v.endRev");
        var start = component.get("v.startRev");
        var pageSize = component.get("v.pageSizeRev");
        var paginationList = [];
        var counter = start-pageSize;
        if(counter<0){counter=0;}
        for(var i=counter; i<start ; i++)
        {
            if(i<list.length)
            {
                paginationList.push(list[i]);
            }
        }
        start = Number(start)-Number(pageSize);
        if(start<0){start=0}
        end = Number(end)-Number(pageSize);
        if(end<pageSize-1){
            end=pageSize-1;
        }
        if(end<=list.length){
            component.set("v.trufButtonLReview",true);
        }
        component.set("v.startRev",start);
        component.set("v.endRev",end);
        component.set("v.reviewListSel", paginationList);
        component.set("v.numRev", num-1);
    },
    first3 : function(component, event, helper)
    {
        var list = component.get("v.productListFull");
        var pageSize = component.get("v.pageSize");
        var paginationList = [];
        for(var i=0; i<pageSize ; i++)
        {
            if(i<list.length)
            {
                paginationList.push(list[i]);
            }
        }
        if(list.length>pageSize){
            component.set("v.trufButtonL",true);
        }
        component.set("v.start",0);
        component.set("v.end",pageSize-1);
        component.set("v.productList", paginationList);
        component.set("v.num", 1);
    },
    first3Rev : function(component, event, helper)
    {
        var list = component.get("v.reviewList");
        var pageSize = component.get("v.pageSizeRev");
        var paginationList = [];
        for(var i=0; i<pageSize ; i++)
        {
            if(i<list.length)
            {
                paginationList.push(list[i]);
            }
        }
        if(list.length>pageSize){
            component.set("v.trufButtonLReview",true);
        }
        component.set("v.startRev",0);
        component.set("v.endRev",pageSize-1);
        component.set("v.reviewListSel", paginationList);
        component.set("v.numRev", 1);
    },
    last3 : function(component, event, helper)
    {
        var list = component.get("v.productListFull");
        var pageSize = component.get("v.pageSize");
        var n = Math.floor(list.length/pageSize);
        var paginationList = [];
        for(var i=n*pageSize; i<list.length ; i++)
        {
                paginationList.push(list[i]);
        }
        component.set("v.start",n*Number(pageSize));
        component.set("v.end",n*Number(pageSize)+Number(pageSize)-1);
        component.set("v.productList", paginationList);
        component.set("v.trufButtonL", false);
        if(list.length/pageSize>n){
            component.set("v.num", n+1);
        }
        else {component.set("v.num", n);}
    },
    last3Rev : function(component, event, helper)
    {
        var list = component.get("v.reviewList");
        var pageSize = component.get("v.pageSizeRev");
        var n = Math.floor(list.length/pageSize);
        var paginationList = [];
        for(var i=n*pageSize; i<list.length ; i++)
        {
            paginationList.push(list[i]);
        }
        component.set("v.startRev",n*Number(pageSize));
        component.set("v.endRev",n*Number(pageSize)+Number(pageSize)-1);
        component.set("v.reviewListSel", paginationList);
        component.set("v.trufButtonLReview", false);
        if(list.length/pageSize>n){
            component.set("v.numRev", n+1);
        }
        else {component.set("v.numRev", n);}
    },
    searchKeyChange2: function(component, event, helper) {
        var searchKey =  component.find("input1").get("v.value");
        //component.set("v.isOpenTable", false);
    },
    sortByName: function(component, event, helper) {
        helper.setSortBool(component, true, false, false, false, false, false, false, false);
        var list =  component.get("v.productListFull");
        var lst = helper.sortBy(component, list);
        component.set("v.productListFull",lst);
        helper.setProductList(component, lst);
    },
    sortByNameRev: function(component, event, helper) {
        helper.setSortBoolRev(component, true, false, false, false, false, false, false, false);
        var list =  component.get("v.reviewList");
        var lst = helper.sortBy(component, list);
        component.set("v.reviewList",lst);
        helper.setReviewList(component, lst);
    },
    sortByNameRevers: function(component, event, helper) {
        helper.setSortBool(component, false, true, false, false, false, false, false, false);
        var list =  component.get("v.productListFull");
        var lst = helper.sortByR(component, list);
        component.set("v.productListFull",lst);
        helper.setProductList(component, lst);
    },
    sortByNameReversRev: function(component, event, helper) {
        helper.setSortBoolRev(component, false, true, false, false, false, false, false, false);
        var list =  component.get("v.reviewList");
        var lst = helper.sortByR(component, list);
        component.set("v.reviewList",lst);
        helper.setReviewList(component, lst);
    },
    sortByView: function(component, event, helper) {
        helper.setSortBool(component, false, false, true, false, false, false, false, false);
        var list =  component.get("v.productListFull");
        var lst = helper.sortByV(component, list);
        component.set("v.productListFull",lst);
        helper.setProductList(component, lst);
    },
    sortByViewRev: function(component, event, helper) {
        helper.setSortBoolRev(component, false, false, true, false, false, false, false, false);
        var list =  component.get("v.reviewList");
        var lst = helper.sortByV(component, list);
        component.set("v.reviewList",lst);
        helper.setReviewList(component, lst);
    },
    sortByViewR: function(component, event, helper) {
        helper.setSortBool(component, false, false, false, true, false, false, false, false);
        var list =  component.get("v.productListFull");
        var lst = helper.sortByVR(component, list);
        component.set("v.productListFull",lst);
        helper.setProductList(component, lst);
    },
    sortByViewRRev: function(component, event, helper) {
        helper.setSortBoolRev(component, false, false, false, true, false, false, false, false);
        var list =  component.get("v.reviewList");
        var lst = helper.sortByVR(component, list);
        component.set("v.reviewList",lst);
        helper.setReviewList(component, lst);
    },
    sortByLike: function(component, event, helper) {
        helper.setSortBool(component, false, false, false, false, true, false, false, false);
        var list =  component.get("v.productListFull");
        var lst = helper.sortByL(component, list);
        component.set("v.productListFull",lst);
        helper.setProductList(component, lst);
    },
    sortByLikeRev: function(component, event, helper) {
        helper.setSortBoolRev(component, false, false, false, false, true, false, false, false);
        var list =  component.get("v.reviewList");
        var lst = helper.sortByL(component, list);
        component.set("v.reviewList",lst);
        helper.setReviewList(component, lst);
    },
    sortByLikeR: function(component, event, helper) {
        helper.setSortBool(component, false, false, false, false, false, true, false, false);
        var list =  component.get("v.productListFull");
        var lst = helper.sortByLR(component, list);
        component.set("v.productListFull",lst);
        helper.setProductList(component, lst);
    },
    sortByLikeRRev: function(component, event, helper) {
        helper.setSortBoolRev(component, false, false, false, false, false, true, false, false);
        var list =  component.get("v.reviewList");
        var lst = helper.sortByLR(component, list);
        component.set("v.reviewList",lst);
        helper.setReviewList(component, lst);
    },
    sortByDislike: function(component, event, helper) {
        helper.setSortBool(component, false, false, false, false, false, false, true, false);
        var list =  component.get("v.productListFull");
        var lst = helper.sortByD(component, list);
        component.set("v.productListFull",lst);
        helper.setProductList(component, lst);
    },
    sortByDislikeRev: function(component, event, helper) {
        helper.setSortBoolRev(component, false, false, false, false, false, false, true, false);
        var list =  component.get("v.reviewList");
        var lst = helper.sortByD(component, list);
        component.set("v.reviewList",lst);
        helper.setReviewList(component, lst);
    },
    sortByDislikeR: function(component, event, helper) {
        helper.setSortBool(component, false, false, false, false, false, false, false, true);
        var list =  component.get("v.productListFull");
        var lst = helper.sortByDR(component, list);
        component.set("v.productListFull",lst);
        helper.setProductList(component, lst);
    },
    sortByDislikeRRev: function(component, event, helper) {
        helper.setSortBoolRev(component, false, false, false, false, false, false, false, true);
        var list =  component.get("v.reviewList");
        var lst = helper.sortByDR(component, list);
        component.set("v.reviewList",lst);
        helper.setReviewList(component, lst);
    },
})