#include <iostream>
using namespace std;

int main()
{
    int v[1000], s=0, n, i;
    cin>>n;
    for(i=0;i<n;i++)
        cin>>v[i];
    for(i=1;i<n-1;i++)
        if(v[i]>v[i-1] && v[i]>v[i+1])
            s+=v[i];
    cout<<s;
}