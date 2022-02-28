console.log("hello TeamSix!")


function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("./cleanData/newerData.json").then((data) => {
    
    var sampleNames = data.names;
    console.log(sampleNames)

    sampleNames.forEach((sample) => {
      console.log(sample)
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
        
    });

    // Use the first sample from the list to build the initial plots
    var firstSample = sampleNames[0];
    buildCharts(firstSample);
    //buildMetadata(firstSample);
  });
}

init();

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  //buildMetadata(newSample);
  buildCharts(newSample);
  
}

function buildCharts(sample) {
  // 2. Use d3.json to load and retrieve the samples.json file 
  d3.json("./cleanData/newerData.json").then((data) => {

    var sampleData = data.samples;
    console.log(sampleData)
    var wfreqData = data.metadata;
    var filteredSamples = sampleData.filter(sample_id => sample_id.names == sample);
    //console.log(filteredSamples)
    var filteredMeta = wfreqData.filter(meta_id => meta_id.id == sample);

    var filteredID = filteredSamples[0];
    var filteredMetaId = filteredMeta[0];
   

    var otu_ids = filteredID.otu_ids;
    var otu_labels = filteredID.otu_labels;
    var sample_values = filteredID.sample_values;
    var wfreq = filteredMetaId.wfreq;
        
      });
    }


//function to gather data for generating a list
function data() {
    d3.json("./cleanData/newerData.json").then((data) => {
      var allData = data.metadata
      console.log(allData)
      generatelist(data.metadata);
    });
  }
  data();

  //function to create a list of attributes to use for charts
  function generatelist(allDataHolder) {
    
    //creating arrays
    var bfpData = [];
    var ipoutsData = [];
    var eraData = [];
    var gfData = [];
    var soData = [];
    var salaryData = [];

    //loop for filtering the attributes
    for (let i = 0; i < allDataHolder.length; i++) {

        bfpData.push(allDataHolder[i]["Batters Faced by Pitcher"]);
        ipoutsData.push(allDataHolder[i]["Outs Pitched"]);
        eraData.push(allDataHolder[i]["ERA"]);
        gfData.push(allDataHolder[i]["Games Finished"]);
        soData.push(allDataHolder[i]["Strike Outs"]);
        salaryData.push(allDataHolder[i]["Salary"]);
    }
    //print data in console
    console.log(bfpData)
    console.log(ipoutsData)
    console.log(eraData)
    console.log(gfData)
    console.log(soData)
    console.log(salaryData)

    //diff functions with diff attribute
    buildBFPCharts(bfpData);
    buildIPoutsCharts(ipoutsData);
    buildERACharts(eraData);
    buildGFCharts(gfData);
    buildSOCharts(soData);
}

// function for BFP chart
function buildBFPCharts(attributeBFP) {
  d3.json("./cleanData/newerData.json").then((data) =>{
    var allData = data.metadata
    var salaryData = [];

    for (let i = 0; i < allData.length; i++) {
      salaryData.push(allData[i]["Salary"]);
  }
      var trace1 = {
        x: attributeBFP,
        y: salaryData,
        text: attributeBFP,
        mode: 'markers',
        marker: {
          color: attributeBFP,
        }
      };
      
      var bubbleData = [trace1];
      
      var bubbleLayout = {
        title: "Salary based on Batters Faced by Pitcher",
        showlegend: false,
        hovermode: "closest",
        height: 700,
      };
    
      Plotly.newPlot('bubbleBFP',bubbleData, bubbleLayout);
    })}

    // function for IPouts chart
function buildIPoutsCharts(attributeIPouts) {
  d3.json("./cleanData/newerData.json").then((data) =>{
    var allData = data.metadata
    var salaryData = [];

    for (let i = 0; i < allData.length; i++) {
      salaryData.push(allData[i]["Salary"]);
  }
      var trace1 = {
        x: attributeIPouts,
        y: salaryData,
        text: attributeIPouts,
        mode: 'markers',
        marker: {
          color: attributeIPouts,
        }
      };
      
      var bubbleData = [trace1];
      
      var bubbleLayout = {
        title: "Salary based on Outs Pitched",
        showlegend: false,
        hovermode: "closest",
        height: 700,
      };
    
      Plotly.newPlot('bubbleIPouts',bubbleData, bubbleLayout);
    })}

// function for ERA chart
function buildERACharts(attributeERA) {
  d3.json("./cleanData/newerData.json").then((data) =>{
    var allData = data.metadata
    var salaryData = [];

    for (let i = 0; i < allData.length; i++) {
      salaryData.push(allData[i]["Salary"]);
  }
      var trace1 = {
        x: attributeERA,
        y: salaryData,
        text: attributeERA,
        mode: 'markers',
        marker: {
          color: attributeERA,
        }
      };
      
      var bubbleData = [trace1];
      
      var bubbleLayout = {
        title: "Salary based on Earned Run Average",
        showlegend: false,
        hovermode: "closest",
        height: 700,
      };
    
      Plotly.newPlot('bubbleERA',bubbleData, bubbleLayout);
    })}

// function for GF chart    
function buildGFCharts(attributeGF) {
  d3.json("./cleanData/newerData.json").then((data) =>{
    var allData = data.metadata
    var salaryData = [];

    for (let i = 0; i < allData.length; i++) {
      salaryData.push(allData[i]["Salary"]);
  }
      var trace1 = {
        x: attributeGF,
        y: salaryData,
        text: attributeGF,
        mode: 'markers',
        marker: {
          color: attributeGF,
        }
      };
      
      var bubbleData = [trace1];
      
      var bubbleLayout = {
        title: "Salary based on Games Finished",
        showlegend: false,
        hovermode: "closest",
        height: 700,
      };
    
      Plotly.newPlot('bubbleGF',bubbleData, bubbleLayout);
    })}

// function for SO chart    
function buildSOCharts(attributeSO) {
  d3.json("./cleanData/newerData.json").then((data) =>{
    var allData = data.metadata
    var salaryData = [];

    for (let i = 0; i < allData.length; i++) {
      salaryData.push(allData[i]["Salary"]);
  }
      var trace1 = {
        x: attributeSO,
        y: salaryData,
        text: attributeSO,
        mode: 'markers',
        marker: {
          color: attributeSO,
        }
      };
      
      var bubbleData = [trace1];
      
      var bubbleLayout = {
        title: "Salary based on Strike Outs",
        showlegend: false,
        hovermode: "closest",
        height: 700,
      };
    
      Plotly.newPlot('bubbleSO',bubbleData, bubbleLayout);
    })}