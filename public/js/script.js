$('#deletelocal').on('show.bs.modal', (event) => {
	$('#delete-localid').val($(event.relatedTarget).data('id'))
})

$('#editLocalForm').on('hidden.bs.modal', (event) => {
	$('#editfurniture').prop('checked', false)
	$('#editwifi').prop('checked', false)
	$('#editgas').prop('checked', false)
	$('#editbills').prop('checked', false)
})
$('#editLocalForm').on('show.bs.modal', (event) => {
	$('#editlocalid').val($(event.relatedTarget).data('id'))
	$('#editaddress').val($(event.relatedTarget).data('address'))
	$('#editcost').val($(event.relatedTarget).data('cost'))
	$('#editsize').val($(event.relatedTarget).data('size'))
	if ($(event.relatedTarget).data('furniture') === 1) {
		$('#editfurniture').prop('checked', true)
	}
	if ($(event.relatedTarget).data('wifi') === 1) {
		$('#editwifi').prop('checked', true)
	}
	if ($(event.relatedTarget).data('gas') === 1) {
		$('#editgas').prop('checked', true)
	}
	if ($(event.relatedTarget).data('bills') === 1) {
		$('#editbills').prop('checked', true)
	}
	$('#editlocalType').val($(event.relatedTarget).data('localtype'))
	$('#editdistrict').val($(event.relatedTarget).data('district'))
	let imgs = $(event.relatedTarget).data('images').toString().split('@')
	imgs.pop()
	let rslt = []
	for (let img of imgs) {
		let sub = img.split('#')
		let obj = JSON.parse(`{"id": ${sub[0]}, "url": "${sub[1]}"}`)
		rslt.push(obj)
	}
	for (let i of rslt) {
		console.log(i)
	}
	// $('#editimages').val(urls)
	const enableSaveButton = () => {
		$('#savelocal').prop('disabled', false)
	}
	$('#editdistrict').change(enableSaveButton)
	$('#editaddress').change(enableSaveButton)
	$('#editcost').change(enableSaveButton)
	$('#editsize').change(enableSaveButton)
	$('#editlocaltype').change(enableSaveButton)
	$('#editfurniture').change(enableSaveButton)
	$('#editwifi').change(enableSaveButton)
	$('#editgas').change(enableSaveButton)
	$('#editbills').change(enableSaveButton)
})
