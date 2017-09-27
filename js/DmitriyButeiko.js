		enableSortable();
		var sortingEnabled;

		function enableSortable() {
		    console.log("Sorting enabling");
		    jQuery("#mainContentWrapper").sortable({
		        placeholder: "ui-state-highlight",
		        helper: 'clone',
		        items: "> *:not(footer, #controlWrapper)"
		    });
		    jQuery(".product_area").sortable({
		        placeholder: "ui-state-highlight",
		        helper: 'clone'
		    });


		    jQuery("#rightPanelSortable").sortable({
		        placeholder: "ui-state-highlight",
		        helper: 'clone',
		        update: function(event, ui) {
		            var currentItem = ui.item;
		            var previousItem = currentItem.prev();
		            var nextItem = currentItem.next();
		            var currentClassName = (currentItem.attr("class").split(" "))[0];

		            if (previousItem.attr("class")) {
		                var previousItemClassName = (previousItem.attr("class").split(" "))[0];
		                var siteBlock = $("#mainContentWrapper");

		                var currentSiteBlock = siteBlock.find("." + currentClassName);

		                var clonedCurrentBlock = currentSiteBlock.clone();
		                currentSiteBlock.remove();

		                clonedCurrentBlock.insertAfter("#mainContentWrapper ." + previousItemClassName);
		            } else {
		                var nextItemClassName = (nextItem.attr("class").split(" "))[0];
		                var siteBlock = $("#mainContentWrapper");

		                var currentSiteBlock = siteBlock.find("." + currentClassName);

		                var clonedCurrentBlock = currentSiteBlock.clone();
		                currentSiteBlock.remove();

		                clonedCurrentBlock.insertBefore("#mainContentWrapper ." + nextItemClassName);
		            }
		        }
		    });
		    $("#mainContentWrapper").sortable("enable");
		    jQuery(".product_area").sortable("enable");
		    jQuery("#rightPanelSortable").sortable("enable");
		    sortingEnabled = true;
		}

		function disableSortable() {
		    console.log("Sorting disabling");
		    $("#mainContentWrapper").sortable("disable");
		    jQuery(".product_area").sortable("disable");
		    sortingEnabled = false;
		}

		jQuery("#sortingCustomization").click(function() {
		    if (sortingEnabled) {
		        disableSortable();
		    } else {
		        enableSortable();
		    }

		    return false;
		});