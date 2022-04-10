/**
 * Created by akireyeu on 02.07.2019.
 */
({
    handleUploadFinished: function (cmp, event,helper) {
        var uploadedFiles = event.getParam("files");
        console.log('Files name',uploadedFiles[0].name);
        helper.alexSetIcon(uploadedFiles[0].name, cmp, event, helper);
    }

})