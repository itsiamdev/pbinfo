#include <iostream>
#include <cmath>

using namespace std;

int main(){

    int n,V[1001],maxx=0,c=0;
    cin>>n;
    for(int i=1; i<=n; i++)
        cin>>V[i];
    for(int i=1,j=2; i<n; j++,i++) {
        if(V[j]-V[i]>maxx)
            maxx=V[j]-V[i];
        if(V[i]-V[j]>maxx)
            maxx=V[i]-V[j];
    }
    for(int i=1,j=2; i<n; j++,i++) {
        if(V[j]-V[i]==maxx || V[i]-V[j]==maxx)
            c++;
    }
    cout<<maxx<<' '<<c;
    return 0;
}