<%@ page contentType="text/html;charset=UTF-8" %>
%{--<%--}%
    %{--def roles = appUser.authorities.collect{"'${it.authority}'"}--}%
%{--%>--}%
%{--<html>--}%
%{--<session-management invalid-session-url="/logout">--}%
%{--</html>--}%

<html>
<head>
    <title>PROTOTYPE</title>

    <link rel="shortcut icon" href="images/favicon.ico"/>
    <link rel="icon" href="images/favicon.ico" type="image/x-icon"/>
    %{--<link rel="stylesheet" type="text/css" href="../js/resources/clifton/css/clifton.css" />--}%

    <jawr:style src="/bun/app.css"/>
    <jawr:script src="/bun/app.js"/>

    <script type="text/javascript">
        Ext.Loader.setConfig({enabled:true});
        Ext.onReady(function() {
            var app = Ext.create('UmassProto.App', {
                user: {
                    %{--name: '${appUser.firstName + ' ' + appUser.lastName}',--}%
                    %{--id: '${appUser.id}',--}%
                    %{--email: '${appUser.email}',--}%
                    %{--role: ${roles}--}%

                }

            });
        });

    </script>

</head>

<body>
<div style="padding:20px;">Loading...</div>
</body>
</html>