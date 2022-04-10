/**
 * Created by akireyeu on 26.12.2019.
 */
({
    timeOut : function(component, value) {
        var act = component.get("c.getReview");
        act.setParams({ id : value});
        act.setCallback(this, function(response)
        {
            var state = response.getState();
            if (component.isValid() && state === "SUCCESS")
            {
                var val = response.getReturnValue();
                component.set('v.reviewList', val);
                var size = val.length-1;
                component.set('v.numSizeRev', size );
                component.set("v.review", val[0]);
            }
        });
        $A.enqueueAction(act);
    },

    dislike : function(component, list, like, dislike) {
        if(like==1){
            this.setLikeDislikeApex(component, list, "c.setMinusLike");
            var ac = component.get("c.setHandleLike");
            ac.setParams({ id : list.Id, i : 0});
            component.set('v.liked', false);
            $A.enqueueAction(ac);
            this.setLikeDislikeApex(component, list, "c.setDislike");
            var acc = component.get("c.setHandleDislike");
            acc.setParams({ id : list.Id, i : 1});
            component.set('v.disliked', true);
            $A.enqueueAction(acc);
        }
        else{
            if(dislike==0){
                this.setLikeDislikeApex(component, list, "c.setDislike");
                var acc = component.get("c.setHandleDislike");
                acc.setParams({ id : list.Id, i : 1});
                component.set('v.disliked', true);
                $A.enqueueAction(acc);
            }
            if(dislike==1){
                this.setLikeDislikeApex(component, list, "c.setMinusDislike");
                var acc = component.get("c.setHandleDislike");
                acc.setParams({ id : list.Id, i : 0});
                component.set('v.disliked', false);
                $A.enqueueAction(acc);
            }
        }
    },

    dislikeRev : function(component, list, like, dislike) {

        if(like==1){
            this.setLikeDislikeApexRev(component, list, "c.setMinusLikeRev");
            var ac = component.get("c.setHandleLikeRev");
            ac.setParams({ id : list.Id, i : 0});
            component.set('v.likedRev', false);
            $A.enqueueAction(ac);
            this.setLikeDislikeApexRev(component, list, "c.setDislikeRev");
            var acc = component.get("c.setHandleDislikeRev");
            acc.setParams({ id : list.Id, i : 1});
            component.set('v.dislikedRev', true);
            $A.enqueueAction(acc);
        }
        else{
            if(dislike==0){
                this.setLikeDislikeApexRev(component, list, "c.setDislikeRev");
                var act = component.get("c.setHandleDislikeRev");
                act.setParams({ id : list.Id, i : 1});
                component.set('v.dislikedRev', true);
                $A.enqueueAction(act);
            }
            if(dislike==1){
                this.setLikeDislikeApexRev(component, list, "c.setMinusDislikeRev");
                var action = component.get("c.setHandleDislikeRev");
                action.setParams({ id : list.Id, i : 0});
                component.set('v.dislikedRev', false);
                $A.enqueueAction(action);
            }
        }
    },

    like : function(component, list, like, dislike) {
        if(dislike==1){
            this.setLikeDislikeApex(component, list, "c.setMinusDislike");
            var acc = component.get("c.setHandleDislike");
            acc.setParams({ id : list.Id, i : 0});
            component.set('v.disliked', false);
            $A.enqueueAction(acc);
            this.setLikeDislikeApex(component, list, "c.setLike");
            var ac = component.get("c.setHandleLike");
            ac.setParams({ id : list.Id, i : 1});
            component.set('v.liked', true);
            $A.enqueueAction(ac);
        }
        else {
            if (like == 0) {
                this.setLikeDislikeApex(component, list, "c.setLike");
                var ac = component.get("c.setHandleLike");
                ac.setParams({ id : list.Id, i : 1});
                component.set('v.liked', true);
                $A.enqueueAction(ac);
            }
            if (like == 1) {
                this.setLikeDislikeApex(component, list, "c.setMinusLike");
                var ac = component.get("c.setHandleLike");
                ac.setParams({ id : list.Id, i : 0});
                component.set('v.liked', false);
                $A.enqueueAction(ac);
            }
        }
    },

    likeRev : function(component, list, like, dislike) {

        if(dislike==1){
            this.setLikeDislikeApexRev(component, list, "c.setMinusDislikeRev");
            var acc = component.get("c.setHandleDislikeRev");
            acc.setParams({ id : list.Id, i : 0});
            component.set('v.dislikedRev', false);
            $A.enqueueAction(acc);
            this.setLikeDislikeApexRev(component, list, "c.setLikeRev");
            var ac = component.get("c.setHandleLikeRev");
            ac.setParams({ id : list.Id, i : 1});
            component.set('v.likedRev', true);
            $A.enqueueAction(ac);
        }
        else {
            if (like == 0) {
                this.setLikeDislikeApexRev(component, list, "c.setLikeRev");
                var ac = component.get("c.setHandleLikeRev");
                ac.setParams({ id : list.Id, i : 1});
                component.set('v.likedRev', true);
                $A.enqueueAction(ac);
            }
            if (like == 1) {
                this.setLikeDislikeApexRev(component, list, "c.setMinusLikeRev");
                var ac = component.get("c.setHandleLikeRev");
                ac.setParams({ id : list.Id, i : 0});
                component.set('v.likedRev', false);
                $A.enqueueAction(ac);
            }
        }
    },

    setHandleLike : function(component, value, i) {
        var act = component.get("c.setHandleLike");
        act.setParams({ id : value, i : i});
        $A.enqueueAction(act);
    },
    setHandleDislike : function(component, value, i) {
        var act = component.get("c.setHandleDislike");
        act.setParams({ id : value, i : i});
        $A.enqueueAction(act);
    },
    sortBy: function(component, list) {
        list.sort(function(a, b)
        {
            var nameA=a.Name.toLowerCase(), nameB=b.Name.toLowerCase()
            if (nameA < nameB)
                return -1
            if (nameA > nameB)
                return 1
            return 0
        });
        return list;
    },
    sortByR: function(component, list) {
        list.sort(function(a, b)
        {
            var nameA=a.Name.toLowerCase(), nameB=b.Name.toLowerCase()
            if (nameA > nameB)
                return -1
            if (nameA < nameB)
                return 1
            return 0
        });
        return list;
    },
    sortByV: function(component, list) {
        list.sort(function(a, b)
        {
            var nameA=a.Views__c, nameB=b.Views__c
            if (nameA > nameB)
                return -1
            if (nameA < nameB)
                return 1
            return 0
        });
        return list;
    },
    sortByVR: function(component, list) {
        list.sort(function(a, b)
        {
            var nameA=a.Views__c, nameB=b.Views__c
            if (nameA < nameB)
                return -1
            if (nameA > nameB)
                return 1
            return 0
        });
        return list;
    },
    sortByL: function(component, list) {
        list.sort(function(a, b)
        {
            var nameA=a.Like__c, nameB=b.Like__c
            if (nameA > nameB)
                return -1
            if (nameA < nameB)
                return 1
            return 0
        });
        return list;
    },
    sortByLR: function(component, list) {
        list.sort(function(a, b)
        {
            var nameA=a.Like__c, nameB=b.Like__c
            if (nameA < nameB)
                return -1
            if (nameA > nameB)
                return 1
            return 0
        });
        return list;
    },
    sortByD: function(component, list) {
        list.sort(function(a, b)
        {
            var nameA=a.Dislike__c, nameB=b.Dislike__c
            if (nameA > nameB)
                return -1
            if (nameA < nameB)
                return 1
            return 0
        });
        return list;
    },
    sortByDR: function(component, list) {
        list.sort(function(a, b)
        {
            var nameA=a.Dislike__c, nameB=b.Dislike__c
            if (nameA < nameB)
                return -1
            if (nameA > nameB)
                return 1
            return 0
        });
        return list;
    },
    setProductList: function(component, list) {
        var st =  component.get("v.start");
        var end =  component.get("v.end");
        var lst = [];
        for(var i=st; i<=end; i++){
            if(list.length>i) {
                lst.push(list[i]);
            }
        }
        component.set("v.productList", lst);
    },
    setReviewList: function(component, list) {
        var st =  component.get("v.startRev");
        var end =  component.get("v.endRev");
        var lst = [];
        for(var i=st; i<=end; i++){
            if(list.length>i) {
                lst.push(list[i]);
            }
        }
        component.set("v.reviewListSel", lst);
    },
    setPagList: function(component) {
        var list =  component.get("v.productListFull");
        var pId =  component.get("v.paginationListId");
        for(var i=0; i<list.length; i++){
            if(list[i].Id==pId) {
                component.set("v.paginationList", list[i]);
            }
        }
    },
    setReview: function(component) {
        var list =  component.get("v.reviewList");
        var pId =  component.get("v.reviewId");
        for(var i=0; i<list.length; i++){
            if(list[i].Id==pId) {
                component.set("v.review", list[i]);
            }
        }
    },
    setLikeDislikeApex: function(component, list, method) {
        var sort = component.get("v.sort");
        var sortR = component.get("v.sortR");
        var sortV = component.get("v.sortV");
        var sortVR = component.get("v.sortVR");
        var sortL = component.get("v.sortL");
        var sortLR = component.get("v.sortLR");
        var sortD = component.get("v.sortD");
        var sortDR = component.get("v.sortDR");
        var act = component.get(method);
        act.setParams({id: list.Id});
        act.setCallback(this, function (response) {
            var state = response.getState();
            if (component.isValid() && state === "SUCCESS") {
                var val = response.getReturnValue();
                if(sort){
                    this.sortBy(component, val);
                }
                if(sortR){
                    this.sortByR(component, val);
                }
                if(sortV){
                    this.sortByV(component, val);
                }
                if(sortVR){
                    this.sortByVR(component, val);
                }
                if(sortL){
                    this.sortByL(component, val);
                }
                if(sortLR){
                    this.sortByLR(component, val);
                }
                if(sortD){
                    this.sortByD(component, val);
                }
                if(sortDR){
                    this.sortByDR(component, val);
                }
                else component.set("v.productListFull", val);
                this.setProductList(component, val);
                this.setPagList(component);
            }
        });
        $A.enqueueAction(act);
    },
    setLikeDislikeApexRev: function(component, list, method) {
        var prdId = component.get("v.paginationList").Id;
        var sort = component.get("v.sortRev");
        var sortR = component.get("v.sortRRev");
        var sortV = component.get("v.sortVRev");
        var sortVR = component.get("v.sortVRRev");
        var sortL = component.get("v.sortLRev");
        var sortLR = component.get("v.sortLRRev");
        var sortD = component.get("v.sortDRev");
        var sortDR = component.get("v.sortDRRev");
        var act = component.get(method);
        act.setParams({id: list.Id, productId: prdId });
        act.setCallback(this, function (response) {
            var state = response.getState();
            if (component.isValid() && state === "SUCCESS") {
                var val = response.getReturnValue();
                if(sort){
                    val = this.sortBy(component, val);
                }
                if(sortR){
                    val = this.sortByR(component, val);
                }
                if(sortV){
                    val = this.sortByV(component, val);
                }
                if(sortVR){
                    val = this.sortByVR(component, val);
                }
                if(sortL){
                    val = this.sortByL(component, val);
                }
                if(sortLR){
                    val = this.sortByLR(component, val);
                }
                if(sortD){
                    val = this.sortByD(component, val);
                }
                if(sortDR){
                    val = this.sortByDR(component, val);
                }
                else component.set("v.reviewList", val);
                this.setReviewList(component, val);
                this.setReview(component);
            }
        });
        $A.enqueueAction(act);
    },
    setSortBool: function(component, sort, sortR, sortV, sortVR, sortL, sortLR, sortD, sortDR){
        component.set("v.sort", sort);
        component.set("v.sortR", sortR);
        component.set("v.sortV", sortV);
        component.set("v.sortL", sortL);
        component.set("v.sortD", sortD);
        component.set("v.sortVR", sortVR);
        component.set("v.sortLR", sortLR);
        component.set("v.sortDR", sortDR);
    },
    setSortBoolRev: function(component, sort, sortR, sortV, sortVR, sortL, sortLR, sortD, sortDR){
        component.set("v.sortRev", sort);
        component.set("v.sortRRev", sortR);
        component.set("v.sortVRev", sortV);
        component.set("v.sortLRev", sortL);
        component.set("v.sortDRev", sortD);
        component.set("v.sortVRRev", sortVR);
        component.set("v.sortLRRev", sortLR);
        component.set("v.sortDRRev", sortDR);
    },
})