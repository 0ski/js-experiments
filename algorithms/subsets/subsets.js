function getSubsetsOf(set, r) {
		const subsets = [];
	  buildSubset(set, 0, r, subsets, []);
	  return subsets;
}

function buildSubset(set, i, r, subsets, subset) {
		if (i > set.length) return;
	  
	  if (subset.length === r) {
		    	subsets.push(subset);
		      return;
		    }

		let clonedSubset = subset.concat();
	  buildSubset(set, i+1, r, subsets, clonedSubset);

		subset.push(set[i]);
	  buildSubset(set, i+1, r, subsets, subset);
}

console.log(getSubsetsOf([1,2,3,4,5], 3));

function getAllSubsetsOf(set) {
		const subsets = [[]];
	  buildSubsets(set, 0, subsets, []);
	  return subsets;
}

function buildSubsets(set, i, subsets, subset) {
		if (i >= set.length) return;

		let clonedSubset = subset.concat();
	  buildSubsets(set, i+1, subsets, clonedSubset);

		subset.push(set[i]);
	  subsets.push(subset.concat());
	  buildSubsets(set, i+1, subsets, subset);
}

console.log(getAllSubsetsOf([1,2,3,4,5]).length);
