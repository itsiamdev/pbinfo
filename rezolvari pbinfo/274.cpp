#include <iostream>
#include <algorithm>
using namespace std;

int main()
{
    int X[1001],n,i;
    cin>>n;
    for(i=1;i<=n;i++)
        cin>>X[i];
    sort(X+1,X+n+1);
    cout<<X[3]<<" "<<X[2]<<" "<<X[1];
    return 0;
}