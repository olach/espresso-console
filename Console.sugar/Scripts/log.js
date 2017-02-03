action.performWithContext = function(context, outError) {
	// Specify regex for white space:
	var startWhiteSpaceRegex = /^[ \t]*/;
	
	// Setup our recipe:
	var recipe = new CETextRecipe();
	
	// Loop through all selections:
	for (var i = 0; i < context.selectedRanges.length; i++) {
		
		// Get selection:
		var selection = context.selectedRanges[i];
		
		// Get content of selection:
		var selectionContent = context.substringWithRange(selection);
		
		// Get current line range:
		var currentLineRange = context.lineStorage.lineRangeForIndex(selection.location);
		
		// Get current line content:
		var currentLineContent = context.substringWithRange(currentLineRange);
		
		// Get all spaces and tabs that the line begins with:
		var startWhiteSpace = currentLineContent.match(startWhiteSpaceRegex);
		
		// Convert array to string:
		if (Array.isArray(startWhiteSpace)) {
			startWhiteSpace = startWhiteSpace.join('');
		} else {
			startWhiteSpace = '';
		}
		
		// Specify line break character:
		var br = context.textPreferences.lineEndingString;
		
		// Default start and end characters to insert:
		var startChars = startWhiteSpace;
		var endChars = br;
		
		// If we are on the last line in the document, we must start with a line break:
		if (context.lineStorage.lineNumberForIndex(selection.location) == context.lineStorage.numberOfLines) {
			startChars = br + startWhiteSpace;
		}

		// Get index for end of current line:
		var endOfLineIndex = currentLineRange.location + currentLineRange.length;
		
		// Default console statement:
		var consoleStatement = 'console.log();';
		
		// Add selected text to the console statement if any:
		if (selectionContent.length > 0) {
			consoleStatement = "console.log('" + selectionContent + ": ' + " + selectionContent + ");";
		}
		
		// Add to the recipe:
		recipe.insertAtIndex(endOfLineIndex, startChars + consoleStatement + endChars);
	}
	
	// Output to the document:
	return context.applyTextRecipe(recipe);
};
