/*
 * If you can remember from high school biology, DNA consistents of a sequence of four organic bases, called adenine,
 * cytosine, guanine, and thymine, often abbreviated as A, C, G, and T. The length of a genetic sequence is measured
 * in a unit called base pairs (bp), which is simply the number of organic bases in the sequence. For example, the
 * DNA sequence AGGCT is 5bp long.
 *
 * During the process know as genetic sequencing, a long strand of DNA is broken up into sequences of fixed-length (a
 * common length is 100bp) then each of those fragments is put onto a sequencer machine which determines their
 * sequence of organic bases.
 *
 * For efficiency, DNA from multiple samples (such as multiple people, multiple tissues, etc) can all be sequenced at
 * once through a concept called molecular barcoding. Each sample is prepared for sequencing separately, which involves
 * breaking up the DNA into fixed-size fragments, then attaching a small DNA sequence onto the beginning of every
 * fragment generated for that sample. This barcode is of a fixed size and will be the same for every fragments of a
 * sample, but different among fragments from different samples.
 *
 * Example: We have a blood sample from Elvis and a blood sample from John Lennon. We want to sequence their DNA to
 * determine if they're related, but we only get one run on the sequencer machine. We do a bunch of science stuff to
 * each sample separately to extract their DNA and then break them down into 20bp sized fragments:
 *
 *     Elvis:
 *         GTGTATTACAATCTAGCTAA
 *         TTGTTTGCAGAGGGCCGCAT
 *         CATCCATCCAGAAGAATTCG
 *     John Lennon:
 *         CGGTTATCTAAGCGCTACTA
 *         TAGCGCTTACAGATTGCTGT
 *         CCTCCGCTTAATACTTTCCG
 *
 * If we pool all six of our fragments together, we won't be able to tell which fragments came from Elvis and which
 * came from John Lennon. So we attach a 6bp molecular barcode onto each of Elvis' fragments, and a different 6bp
 * molecular barcode onto all of John Lennon's fragments:
 *
 *     Elvis' barcode: CACATG
 *     John's barcode: CGCCTA
 *
 * So then the resulting set of fragments would be:
 *
 *     Elvis:
 *         CACATGGTGTATTACAATCTAGCTAA
 *         CACATGTTGTTTGCAGAGGGCCGCAT
 *         CACATGCATCCATCCAGAAGAATTCG
 *     John Lennon:
 *         CGCCTACGGTTATCTAAGCGCTACTA
 *         CGCCTATAGCGCTTACAGATTGCTGT
 *         CGCCTACCTCCGCTTAATACTTTCCG
 *
 * Notice the first six bases from each sample are the same. When we sequence all of these fragments, we need to first
 * look at the first six bases to determine which sample the fragment came from. Since we know which molecular barcodes
 * we used, we can match up the first six bases to a particular sample. In the above case, if we see a fragment that
 * starts with CACATG then we know it's from Elvis' blood, and if it starts with CGCCTA then it belongs to John Lennon.
 *
 * Your task here is actually much simpler than the above background, I just think it's kinda cool to know. Your
 * exercise is to write a script that will generate n random barcodes of length k. Those sequences should only consist
 * of A, C, G, or T, and the sequence itself can be random. You'll only implement one function, read the description
 * for more details on how it should work.
 *
 * Javascript can generate random numbers as a float between 0 and 1. That can be used to generate a random integer.
 * You'll need to look up how to do that. You should then use that to generate a random organic base k times.
 */

/*
 * This function should generate n barcodes of length k, and return them all as an
 * array of strings.
 */
function generateMolecularBarcodes(/* arguments here */) {
    // Your code here
}

/*
 * This function is complete, and you don't need to use it.
 */
function renderToScreen(text) {
    document.getElementById('result').innerHTML += '<p>' + text + '</p>';
}

// Prompt the user for input data; you can assume it will always be integers
var n = parseInt(prompt('How many barcodes do you want?'));
var k = parseInt(prompt('How long should those barcodes be?'));

barcodes = generateMolecularBarcodes(n, k);
for (var i = 0; i < barcodes.length; i++) {
    renderToScreen(barcodes[i]);
}