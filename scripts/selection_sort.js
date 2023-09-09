function Selection_sort()
{
    //Setting Time complexities
    document.getElementById("Time_Worst").innerText="O(N^2)";
    document.getElementById("Time_Average").innerText="Θ(N^2)";
    document.getElementById("Time_Best").innerText="Ω(N^2)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText="O(1)";

    c_delay=0;

    for(var i=0;i<array_size-1;i++)
    {
        div_update(divs[i],div_sizes[i],"#ef3b3b");//Color update

        index_min=i;

        for(var j=i+1;j<array_size;j++)
        {
            div_update(divs[j],div_sizes[j],"#f0f562");//Color update

            if(div_sizes[j]<div_sizes[index_min])
            {
                if(index_min!=i)
                {
                    div_update(divs[index_min],div_sizes[index_min],"#4177cd");//Color update
                }
                index_min=j;
                div_update(divs[index_min],div_sizes[index_min],"#ef3b3b");//Color update
            }
            else
            {
                div_update(divs[j],div_sizes[j],"#4177cd");//Color update
            }
        }
        
        if(index_min!=i)
        {
            var temp=div_sizes[index_min];
            div_sizes[index_min]=div_sizes[i];
            div_sizes[i]=temp;

            div_update(divs[index_min],div_sizes[index_min],"#ef3b3b");//Height update
            div_update(divs[i],div_sizes[i],"#ef3b3b");//Height update
            div_update(divs[index_min],div_sizes[index_min],"#4177cd");//Color update
        }
        div_update(divs[i],div_sizes[i],"#3f9b1a");//Color update
    }
    div_update(divs[i],div_sizes[i],"#3f9b1a");//Color update

    enable_buttons();
}