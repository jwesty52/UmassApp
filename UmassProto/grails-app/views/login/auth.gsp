<%@ page contentType="text/html;charset=UTF-8" %>
<html>
  <head>
    <title>BDManager : DaVinci Concepts</title>

    <link rel="shortcut icon" href="images/favicon.ico"/>
    <link rel="icon" href="images/favicon.ico" type="image/x-icon"/>
    <link rel="stylesheet" type="text/css" media="screen" href="../css/umassProto.css" />
  </head>
  <body style="margin-top:60px;">
  <div id="loginBox">
     <div style="float:left;">
      %{--<img src="../images/davincilogo.jpg" width="850" height="125" />--}%
    </div>
    <div style="margin-top:60px;">
      <h1>Login </h1>
      <form action='${postUrl}' method='POST' id='loginForm' class='cssform' autocomplete='off'>
        <p>
          <label for='username'>Email:</label>
          <input type='text' class='text_' name='j_username' id='username'/>
        </p>

        <p>
          <label for='password'>Password:</label>
          <input type='password' class='text_' name='j_password' id='password'/>
        </p>

        %{--<p>--}%
          %{--<label for='remember_me'>Remember me:</label>--}%
          %{--<input type='checkbox' class='chk' name='${rememberMeParameter}' id='remember_me'--}%
                 %{--<g:if test='${hasCookie}'>checked='checked'</g:if>/>--}%
        %{--</p>--}%

        <p>
          <input type='submit' value='Login' />
        </p>
      </form>
    </div>
    <div style="clear:both;">&nbsp;</div>
  </div>
  <script type='text/javascript'>
    <!--
    (function() {
      document.forms['loginForm'].elements['j_username'].focus();
    })();
    // -->
  </script>
  </body>
</html>