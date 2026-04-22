<p id="reportClick">Report an Error on this page</p>
<script>
    $("#reportClick").on("click",function(){
        $("#errorReport").toggle();
    })
</script>
<div id="errorReport">
    <p id="reportErrorLink">Report an error on this page</p>
    <?php
    $newPatch = file_get_contents(dirname(__FILE__) . "/newpatch.txt");
    if ($newPatch) {
        echo '<div id="newPatch">Co-op has recently been updated. Please do not report patch mismatches yet.</div>';
    }
    ?>
    <form action="javascript:void(0);" name="errorReport" id="reportForm" class="captchaForm" onsubmit="return validate()" method="post">
        <p>Comment: <input type="text" name="comment" maxlength="100" size="50" onkeyup="countChar(this)"></p>
        <p id="countp"><span id="count">100</span> characters left</p>
        <p style="display:none">Leave this empty: <input type="text" name="url"></p>

        <input type="hidden" name="recaptcha_response" id="reportFormRecaptchaResponse" class="reportCaptcha">
        <p><input type="submit" id="submitbtn" value="Submit"></p>
        <p id="captchaTOS">This site is protected by reCAPTCHA and the Google
    <a href="https://policies.google.com/privacy">Privacy Policy</a> and
    <a href="https://policies.google.com/terms">Terms of Service</a> apply.</p>
    </form>
    <script>
        function countChar(val) {
            var len = val.value.length;
            $('#count').text(100 - len);
        };
        function validate() {
            var x = $('#reportForm [name=comment]').val()
            if (x == "") {
             alert("Comment is blank");
             return false;
            }
        }
    </script>
</div>