function buildHome() {
    $('body').append('<div role=main id=main_div></div>');
    $('body div#main_div').addClass('container theme-showcase');
    $('body div#main_div').append('<div class=row id=title_row></div>');
    $('body div#title_row').append('<div id=col_title></div>');
    $('body div#col_title').addClass('col-md-12 text-center');
    $('div#col_title').append('<div class=jumbotron></div>');
    $('div#col_title div').append('<img class=center-block src=https://webjump.com.br/wp-content/uploads/2019/03/logo-webjump-footer.png></img>');
    $('img').addClass('img-responsive');
}

function buildPanelOne() {
// Add Panel One
    $('div.container.theme-showcase').append('<div class=row id=panel_list></div>');
    $('div.row#panel_list').append('<div class=col-sm-4 id=panel_size_one></div>');
    $('div#panel_size_one').append('<div id=panel_test_one></div>');
    $('div#panel_test_one').addClass('panel panel-default');
    $('div#panel_test_one').append('<div class=panel-heading id=panel_heading_one></div>');
    $('div#panel_heading_one').append('<h3 class=panel-title id=heading_one>Buttons</h3>');
    $('div#panel_test_one').append('<div class=panel-body id=panel_body_one></div>');
    $('#panel_body_one').addClass('text-center');
}

function buildPanelTwo() {
    // Add Panel Two
    $('div.row#panel_list').append('<div class=col-sm-4 id=panel_size_two></div>');
    $('div#panel_size_two').append('<div id=panel_test_two></div>');
    $('div#panel_test_two').addClass('panel panel-default');
    $('div#panel_test_two').append('<div class=panel-heading id=panel_heading_two></div>');
    $('div#panel_heading_two').append('<h3 class=panel-title id=heading_two>Fields</h3>');
    $('div#panel_test_two').append('<div class=panel-body id=panel_body_two></div>');
    $('#panel_body_two').addClass('text-center');
}

function buildPanelThree() {
    // Add Panel Three
    $('div.row#panel_list').append('<div class=col-sm-4 id=panel_size_three></div>');
    $('div#panel_size_three').append('<div id=panel_test_three></div>');
    $('div#panel_test_three').addClass('panel panel-default');
    $('div#panel_test_three').append('<div class=panel-heading id=panel_heading_three></div>');
    $('div#panel_heading_three').append('<h3 class=panel-title id=heading_one>Image Asserts</h3>');
    $('div#panel_test_three').append('<div class=panel-body id=panel_body_three></div>');
    $('#panel_body_three').addClass('text-center');
}

function createAddButtons() {
// Add Buttons
    $('#panel_body_one').append('<p><button id=btn_one type=button>One</button></p><p><button id=btn_two type=button>Two</button></p><p><button id=btn_three type=button>Three</button></p><p><button id=btn_link type=button>Four</button></p><p><button type=button id=reset_buttons>Reset Buttons</button></p>');
    $('#btn_one').addClass('btn btn-lg btn-default');
    $('#btn_two').addClass('btn btn-default');
    $('#btn_three').addClass('btn btn-sm btn-default');
    $('#btn_link').addClass('btn btn-xs btn-link');
    $('#panel_body_one').append('<select id=select_box><option value=option_one>ExampleOne</option><option value=option_two>ExampleTwo</option><option value=option_three>ExampleThree</option></select>');
    $('#panel_body_one').append('<div class=checkbox><label><input type=checkbox id=opt_one value=>OptionOne</label></div><div class=checkbox><label><input type=checkbox id=opt_two value=>OptionTwo</label></div><div class=checkbox><label><input type=checkbox id=opt_three value=>OptionThree</label></div>');
    $('#reset_buttons').addClass('btn btn-lg btn-success');
}

function addButtonActions() {
    // Add Buttons Actions
    var btn_one_click = $('#btn_one').click(function() {
        $(this).slideUp();
    });
    var btn_two_click = $('#btn_two').click(function() {
        $(this).slideUp();
    });
    var btn_three_click = $('#btn_three').click(function() {
        $(this).slideUp();
    });
    var btn_link_click = $('#btn_link').click(function() {
        $(this).slideUp();
    });
    var btn_reset_click = $('#reset_buttons').click(function() {
        $('#btn_one').slideDown();
        $('#btn_two').slideDown();
        $('#btn_three').slideDown();
        $('#btn_link').slideDown();
    });    
}

function addFields() {
    // Add Fields
    $('#panel_body_two').append('<div class=form-group id=form_group></div>');
    $('#form_group').append('<p><input type=text class=form-control placeholder=YourFirstName id=first_name></input></p>');
    $('#form_group').append('<p><input type=text class=form-control placeholder=YourMidName id=mid_name></input></p>');
    $('#form_group').append('<p><input type=text class=form-control placeholder=YourLastName id=last_name></input></p>');
    $('#form_group').append('<p><input type=text class=form-control placeholder=YourAge id=age></input></p>');
    $('#form_group').append('<p><input type=text class=form-control placeholder=YourEmail id=email></input></p>');
    $('#form_group').append('<p><input type=text class=form-control placeholder=YourJob id=job></input></p>');
    $('#form_group').append('<p><input type=text class=form-control placeholder=YourGender id=gender></input></p>');
    $('#form_group').append('<p><button type=button id=reset_fields>Reset Fields</button></p>');
    $('#reset_fields').addClass('btn btn-lg btn-success');
}

function addFieldsActions() {
    // Add Fields Actions
    var fields_reset_click = $('#reset_fields').click(function() {
        $('#first_name').val('');
        $('#mid_name').val('');
        $('#last_name').val('');
        $('#age').val('');
        $('#email').val('');
        $('#job').val('');
        $('#gender').val('');
    }); 
}

function addTexts() {
    // Add Texts
    $('#panel_list').append('<div id=well_text></div>');
    $('#well_text').addClass('col-sm-12');
    $('#well_text').append('<div class=well><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla sed consectetur.</p></div>');
}

function addImages() {
    // Add Images
    $('#panel_body_three').append('<img class=img-responsive alt=php src=http://php.net//images/logos/new-php-logo.svg></img>');
    $('#panel_body_three').append('<img class=img-responsive alt=html_css_js src=https://www.planet-source-code.com/vb/2010Redesign/images/LangugeHomePages/HTML5_CSS_JavaScript.png></img>');
    $('#panel_body_three').append('<img class=img-responsive-center-block alt=magento src=https://webjump.com.br/wp-content/uploads/2019/12/partner-magento.png></img>');
    $('#panel_body_three').append('<img class=img-responsive-center-block alt=selenium src=http://techtutorr.com/wp-content/uploads/2014/04/selenium-webdriver-online-courses-techtutorr.jpg></img>');
}

function addIframePanelOne() {
    // Add IFrame Panel One
    $('div.container.theme-showcase').append('<div class=row id=panel_list_frame></div>');
    $('div.row#panel_list_frame').append('<div class=col-sm-6 id=iframe_panel></div>');
    $('div#iframe_panel').append('<div id=iframe_panel_test></div>');
    $('div#iframe_panel_test').addClass('panel panel-default');
    $('div#iframe_panel_test').append('<div class=panel-heading id=iframe_panel_heading></div>');
    $('div#iframe_panel_heading').append('<h3 class=panel-title id=heading_iframe>IFrame Buttons</h3>');
    $('div#iframe_panel_test').append('<div class=panel-body id=iframe_panel_body></div>');
    $('div#heading_iframe').addClass('text-ceter');
}

function addIframePanelTwo() {
    // Add IFrame Panel Two
    $('div.row#panel_list_frame').append('<div class=col-sm-6 id=iframe_panel_two></div>');
    $('div#iframe_panel_two').append('<div id=iframe_panel_test_two></div>');
    $('div#iframe_panel_test_two').addClass('panel panel-default');
    $('div#iframe_panel_test_two').append('<div class=panel-heading id=iframe_panel_heading_two></div>');
    $('div#iframe_panel_heading_two').append('<h3 class=panel-title id=heading_iframe_two>IFrame Fields</h3>');
    $('div#heading_iframe_two').addClass('text-ceter');
    $('div#iframe_panel_test_two').append('<div class=panel-body id=iframe_panel_body_two></div>');
    $('#iframe_panel_body_two').addClass('text-center');
}

function addIframe() {
    // Add iFrame
    $('#iframe_panel_body').append('<iframe src="buttons.html" style="width:100%;height:100%;scroll:none;border:0;"></iframe>');
    $('#iframe_panel_body_two').append('<iframe src="fields.html" style="width:100%;height:100%;scroll:none;border:0;"></iframe>');
}

function buildPage() {
    buildHome()
    buildPanelOne()
    buildPanelTwo()
    buildPanelThree()
    createAddButtons()
    addButtonActions()
    addFields()
    addFieldsActions()
    addTexts()
    addImages()
    addIframePanelOne()
    addIframePanelTwo()
    addIframe()
}

buildPage()
