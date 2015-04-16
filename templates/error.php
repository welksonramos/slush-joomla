<?php

defined('_JEXEC') or die;

$app       = JFactory::getApplication();
$doc       = JFactory::getDocument();
$sitename 	= $app->get('sitename');
?>
<!DOCTYPE html>
<html lang="<?php echo $this->language; ?>" dir="<?php echo $this->direction; ?>">
<head>
	<title><?php echo $this->error->getCode(); ?> - <?php echo htmlspecialchars($this->error->getMessage()); ?></title>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<jdoc:include type="head" />
	<link rel="stylesheet" href="<?php echo $this->baseurl; ?>/templates/<?php echo $this->template ?>/css/style.css">
	<link rel="stylesheet" href="<?php echo $this->baseurl; ?>/templates/<?php echo $this->template ?>/css/error.css" type="text/css" />
	<!--[if lt IE 9]>
		<script src="<?php echo $this->baseurl; ?>/media/jui/js/html5.js"></script>
		<![endif]-->
	</head>
	<body>
		<div class="container-fluid error">
			<div class="row-fluid error-description">
				<div class="span12">
					<h1>404</h1>
				</div>
				<div class="row-fluid">
					<div class="span12">
						<h2>Oops, ocorreu um erro!</h2>
					</div>
				</div>
				<div class="row-fluid">
					<div class="span12">
						<p>A pagina que você está buscando foi removida ou não existe <br>
						Por favor, retorne para a <a href="<?php echo $this->baseurl; ?>" title="<?php echo JText::_('JERROR_LAYOUT_HOME_PAGE'); ?>"><?php echo JText::_('JERROR_LAYOUT_HOME_PAGE'); ?></a> do site :) </p>
					</div>
				</div>
			</div>
		</div>
		<div class="clearfix"></div>
		<footer class="footer">
			<div class="container">
				<div class="row-fluid">
					<div class="span12">
						<p>&copy; Copyright <?php echo date('Y'); ?> - Todos os direitos reservados para <?php echo $sitename; ?></p>
					</div>
				</div>
			</div>
		</footer>
	</body>
</html>