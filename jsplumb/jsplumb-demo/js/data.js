var initialData1 = {
    "Nodes":[
        {
        "Guid": "8fcbebd4-7f85-4043-acc0-05859f8dece9",
        "CreateUser": "0003                          ",
        "CreateDateTime": "/Date(1456882860000+0800)/",
        "LastUpdateUser": "0003                          ",
        "LastUpdateDateTime": "/Date(1456882860000+0800)/",
        "Code": "BranchEnd8",
        "NodeType": 2,
        "NodeMode": 1,
        "GroupGuid": "00000000-0000-0000-0000-000000000000",
        "SubMode": 0,
        "OrderNo": 0,
        "Description": "",
        "Version": 0,
        "JumpMode": 0,
        "RemarkMode": 0,
        "AllowCustomExecutor": false,
        "AllowCustomCC": false,
        "AllowNextExecutor": false,
        "NextExecutorIsRequired": false,
        "CurrExecutorIsRequired": false,
        "ExecutorWhere1": 0,
        "ExecutorWhere2": 0,
        "AllowCustomCCEmail": false,
        "AllowRevoke": false,
        "AllowBatchCancel": false,
        "AllowBatchOK": false,
        "AllowPriority": false,
        "AllowCustomRollback": false,
        "AllowNextCC": false,
        "NextCCIsRequired": false,
        "CustomCCIsRequired": false,
        "Style": "left: 0px; top: 0px;",
        "Main": {
            "Guid": "a6b3bb43-99bb-4aa2-b51a-00e062d70531",
            "CreateUser": "167                           ",
            "CreateDateTime": "/Date(1398085122000+0800)/",
            "LastUpdateUser": "0003                          ",
            "LastUpdateDateTime": "/Date(1476005103000+0800)/",
            "Code": "CopyTest",
            "ViewNamePrefix": null,
            "MainTable": null,
            "SubFlow": false,
            "Internal": null,
            "Priority": 3,
            "Category": "Performance",
            "RunMode": 0,
            "Enable": true,
            "BatchApproval": false,
            "BatchRefuse": true,
            "AttachementType": 1,
            "Version": null,
            "TimeOut": null,
            "AgencyMode": null,
            "Description": "test",
            "DialogWidth": null,
            "DialogHeight": null,
            "IconFileName": null,
            "LargeIconFileName": null,
            "RollbackFlowGuid": "00000000-0000-0000-0000-000000000000",
            "UpdateFlowGuid": null,
            "ExtendProperties": null,
            "HasAttachement": true,
            "UseFlowPrint": false,
            "CommitNotAlertSuccess": false,
            "GoBackNotAlertSuccess": false,
            "MenuID": "aa",
            "BeginNodeIsAutoPost": false,
            "IsRepeatLaunch": false,
            "RepeatLaunchTimeInterval": 0,
            "OtherJson": "{\"CloseFlowEmail\": \"7e96b211-8050-422b-85cb-594f0bba8b8e\",\"NoApprovedEmail\":\"1fa86ea4-498f-44a1-ba6f-8d60048943d1\",\"AppUrl\":\"Leave/AppLeave/Application\",\"AddAppUrl\":\"Leave/AppLeave/Application4\",\"IsCalculateApprover\":\"0\",\"PostRemarkRequired\":\"0\",\"GoBackRemarkRequired\":\"0\",\"RefusedRemarkRequired\":\"0\",\"NotQuery\":\"0\",\"CustomFormXMLPath\":\"\",\"ShowOneStaffView\":\"0\"}",
            "RevokeType": 0,
            "Name": {
                "English": "CopyTest",
                "Chinese": "CopyTest",
                "Language1": "CopyTest",
                "Language2": "CopyTest",
                "Language3": "CopyTest"
            },
            "Other": {
                "CloseFlowEmail": "7e96b211-8050-422b-85cb-594f0bba8b8e",
                "NoApprovedEmail": "1fa86ea4-498f-44a1-ba6f-8d60048943d1",
                "AppUrl": "Leave/AppLeave/Application",
                "AddAppUrl": "Leave/AppLeave/Application4",
                "IsCalculateApprover": "0",
                "PostRemarkRequired": "0",
                "GoBackRemarkRequired": "0",
                "RefusedRemarkRequired": "0",
                "NotQuery": "0",
                "CustomFormXMLPath": "",
                "ShowOneStaffView": "0"
            },
            "ShouldLog": true
        },
        "Name": {
            "English": "BranchEnd8",
            "Chinese": "分支结束8",
            "Language1": "",
            "Language2": "",
            "Language3": ""
        },
        "RemarkLabel": {
            "English": "",
            "Chinese": "",
            "Language1": "",
            "Language2": "",
            "Language3": ""
        },
        "ShouldLog": true
    }
]
    
};
var initialData = {
    "Nodes": [
        
        {
            "Guid": "b5a84849-3553-4d52-9cdf-175bd1d21348",
            "NodeType": 1,
            "Style": "left: 0px; top: 0px;",
            "Name": {
                "Chinese": "分支开始8",
            },
        },
        {
            "Guid": "b5a84849-3553-4d52-9cdf-175bd1d213148",
            "NodeType": 2,
            "Style": "left: 110px; top: 110px;",
            "Name": {
                "Chinese": "分支开始8",
            },
        },
    ],"Jumps": [
        {
            "SourceId": "b5a84849-3553-4d52-9cdf-175bd1d21348",
            "TargetId": "b5a84849-3553-4d52-9cdf-175bd1d213148",
            "Text": "同意",
            "JumpId": "6cd83ddf-b080-419b-99bb-b62537a8fc99"
        },
    ]
   
}