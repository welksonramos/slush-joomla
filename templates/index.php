<?php

defined('_JEXEC') or die;

$app       = JFactory::getApplication();
$doc       = JFactory::getDocument();
$sitename 	= $app->get('sitename');

// Add JavaScript Frameworks.
JHtml::_('bootstrap.framework');

// Load optional rtl Bootstrap css and Bootstrap bugfixes.
JHtmlBootstrap::loadCss(false, $this->direction);

// Add Stylesheet.
$this->addStyleSheet('media/jui/css/icomoon.css');
$this->addStyleSheet('media/jui/css/bootstrap.min.css');
$doc->addStyleSheet('templates/' . $this->template . '/css/style.css');
?>
<!DOCTYPE html>
<html lang="<?php echo $this->language; ?>" dir="<?php echo $this->direction; ?>">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<jdoc:include type="head" />
	<!--[if lt IE 9]>
		<script src="<?php echo $this->baseurl; ?>/media/jui/js/html5.js"></script>
		<![endif]-->
	</head>
	<body>

<!--
	YOUR CODE HERE
-->

	</body>
</html>