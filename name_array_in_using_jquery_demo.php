<?php 
$arr=array(
	array('cs1','abc.jpg'),
	array('cs2','abc2.jpg'),
	array('cs3','abc3.jpg')
	);
echo count($arr);
?>
<html>
	<head>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
	</head>
	<body>
			<?php 
			for($i=0;$i<count($arr);$i++)
			{
			?>
				<div class="row">
					<input type="text" name="names[]" value='<?php echo $arr[$i][0];?>'>
					<input type="file" class="media" name="media_file[]">
					<input type="hidden" name="media_files[]" value='<?php echo $arr[$i][1];?>' />
					<input type="hidden" name="media_deleted[]" />
				</div>
			<?php 
			}
			?>	
	</body>
	<script>
		$(document).ready(function(){
			//alert('hello');
			//$('.media').change(function(){
				$(document).on('change', '.media', function () {
				
				if($(this).next().attr('value')!='')
				{
					var oldval=$(this).next().val();
					$(this).next().next().val(oldval);
					$(this).next().attr('value','');
				}
			});
		});
	</script>
</html>