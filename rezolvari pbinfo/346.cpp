#include <iostream>
using namespace std;

int main()
{
    // val max si k aparitii
    long int n, i, k=0, max, v[1000];
    cin>>n;
    for(i=0; i<n; i++)
        cin>>v[i];
    max=v[0];
    for(i=1; i<n; i++)
        if(max<v[i])
            max=v[i];
    for(i=0; i<n; i++)
        if(v[i]==max)
            k+=1;
    cout<<max<<" "<<k;
}